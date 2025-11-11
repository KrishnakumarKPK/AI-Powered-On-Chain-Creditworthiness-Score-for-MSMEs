from collections.abc import Iterator
import pytest
from algopy_testing import AlgopyTestContext, algopy_testing_context

from smart_contracts.msme.contract import Msme

@pytest.fixture()
def context() -> Iterator[AlgopyTestContext]:
    with algopy_testing_context() as ctx:
        yield ctx

def test_hello(context: AlgopyTestContext) -> None:
    dummy_input = context.any.string(length=10)
    contract = Msme()
    output = contract.hello(dummy_input)
    assert output == f"Hello, {dummy_input}"

def test_submit_data_and_score(context: AlgopyTestContext) -> None:
    contract = Msme()
    dummy_data = {
        "invoices": "hashed_invoice_abc",
        "payments": "hashed_pay_xyz",
        "metadata": "hashed_metadata_efg"
    }
    submit_result = contract.submit_data(dummy_data)
    assert submit_result is True or submit_result == "Success"  # Modify per contract logic
    credit_score = contract.get_credit_score("hashed_metadata_efg")
    assert isinstance(credit_score, (int, float))
    assert 0 <= credit_score <= 100

def test_invalid_data_submission(context: AlgopyTestContext) -> None:
    contract = Msme()
    dummy_data = {}
    with pytest.raises(ValueError):
        contract.submit_data(dummy_data)

def test_create_passport_nft(context: AlgopyTestContext) -> None:
    contract = Msme()
    msme_id = "msme_001"
    metadata = {"score": 85, "issuer": "AIService"}
    nft_id = contract.create_passport_nft(msme_id, metadata)
    # Check that a valid NFT asset id or response is returned
    assert nft_id is not None
    assert isinstance(nft_id, int) or isinstance(nft_id, str)
