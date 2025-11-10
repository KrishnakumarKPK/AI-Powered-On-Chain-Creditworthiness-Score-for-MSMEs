from collections.abc import Iterator
import pytest
from algopy_testing import AlgopyTestContext, algopy_testing_context

from smart_contracts.msme.contract import Msme

@pytest.fixture()
def context() -> Iterator[AlgopyTestContext]:
    with algopy_testing_context() as ctx:
        yield ctx

def test_hello(context: AlgopyTestContext) -> None:
    # Arrange
    dummy_input = context.any.string(length=10)
    contract = Msme()

    # Act
    output = contract.hello(dummy_input)

    # Assert
    assert output == f"Hello, {dummy_input}"

def test_submit_data_and_score(context: AlgopyTestContext) -> None:
    contract = Msme()

    # Simulate anonymized MSME data submission
    dummy_data = {
        "invoices": "hashed_invoice_abc",
        "payments": "hashed_pay_xyz",
        "metadata": "hashed_metadata_efg"
    }
    submit_result = contract.submit_data(dummy_data)
    assert submit_result is True or submit_result == "Success"  # Modify according to contract logic

    # Simulate retrieval of AI-calculated score
    credit_score = contract.get_credit_score("hashed_metadata_efg")
    assert isinstance(credit_score, (int, float))
    assert 0 <= credit_score <= 100

def test_invalid_data_submission(context: AlgopyTestContext) -> None:
    contract = Msme()

    # Submit empty data (simulate failure)
    dummy_data = {}
    with pytest.raises(ValueError):
        contract.submit_data(dummy_data)
