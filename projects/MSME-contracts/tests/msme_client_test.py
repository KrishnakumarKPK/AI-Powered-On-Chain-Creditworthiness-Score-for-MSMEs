import algokit_utils
import pytest
from algokit_utils import (
    AlgoAmount,
    AlgorandClient,
    SigningAccount,
)

from smart_contracts.artifacts.msme.msme_client import (
    MsmeClient,
    MsmeFactory,
)

@pytest.fixture()
def deployer(algorand_client: AlgorandClient) -> SigningAccount:
    account = algorand_client.account.from_environment("DEPLOYER")
    algorand_client.account.ensure_funded_from_environment(
        account_to_fund=account.address, min_spending_balance=AlgoAmount.from_algo(10)
    )
    return account

@pytest.fixture()
def msme_client(
    algorand_client: AlgorandClient, deployer: SigningAccount
) -> MsmeClient:
    factory = algorand_client.client.get_typed_app_factory(
        MsmeFactory, default_sender=deployer.address
    )

    client, _ = factory.deploy(
        on_schema_break=algokit_utils.OnSchemaBreak.AppendApp,
        on_update=algokit_utils.OnUpdate.AppendApp,
    )
    return client

def test_says_hello(msme_client: MsmeClient) -> None:
    result = msme_client.send.hello(args=("World",))
    assert result.abi_return == "Hello, World"

def test_simulate_says_hello_with_correct_budget_consumed(
    msme_client: MsmeClient,
) -> None:
    result = (
        msme_client.new_group()
        .hello(args=("World",))
        .hello(args=("Jane",))
        .simulate()
    )
    assert result.returns[0].value == "Hello, World"
    assert result.returns[1].value == "Hello, Jane"
    assert result.simulate_response["txn-groups"][0]["app-budget-consumed"] < 100

def test_submit_data_and_get_credit_score(msme_client: MsmeClient) -> None:
    # Simulate MSME submitting anonymized transaction data as proof
    dummy_data = {
        "invoices": "hashed_invoice_123",
        "payments": "hashed_pay_456",
        "metadata": "hashed_metadata_789"
    }
    submit_result = msme_client.send.submit_data(args=(dummy_data,))
    assert submit_result.confirmed  # Replace with actual confirmation field

    # Simulate querying AI-powered credit score from contract
    score_result = msme_client.send.get_credit_score(args=("hashed_metadata_789",))
    assert isinstance(score_result.abi_return, (int, float))  # Score must be a number
    assert 0 <= score_result.abi_return <= 100  # Score is in percentile range
