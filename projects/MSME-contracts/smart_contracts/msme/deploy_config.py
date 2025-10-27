import logging

import algokit_utils

logger = logging.getLogger(__name__)

def deploy() -> None:
    from smart_contracts.artifacts.msme.msme_client import (
        GetMsmeDetailsArgs,
        GetScoreArgs,
        GetScoreHistoryArgs,
        HelloArgs,
        MsmeFactory,
        RegisterMsmeArgs,
        SubmitScoreArgs,
    )

    algorand = algokit_utils.AlgorandClient.from_environment()
    deployer_ = algorand.account.from_environment("DEPLOYER")
    factory = algorand.client.get_typed_app_factory(
        MsmeFactory, default_sender=deployer_.address
    )
    app_client, result = factory.deploy(
        on_update=algokit_utils.OnUpdate.AppendApp,
        on_schema_break=algokit_utils.OnSchemaBreak.AppendApp,
    )
    if result.operation_performed in [
        algokit_utils.OperationPerformed.Create,
        algokit_utils.OperationPerformed.Replace,
    ]:
        algorand.send.payment(
            algokit_utils.PaymentParams(
                amount=algokit_utils.AlgoAmount(algo=1),
                sender=deployer_.address,
                receiver=app_client.app_address,
            )
        )
    # Register a new MSME
    msme_id = "MSME123"
    msme_name = "Test Enterprise"
    register_response = app_client.send.register_msme(
        args=RegisterMsmeArgs(msme_id=msme_id, name=msme_name)
    )
    logger.info(f"MSME registration for {msme_id}: {register_response.abi_return}")

    # Submit a credit score
    score = 760
    score_response = app_client.send.submit_score(
        args=SubmitScoreArgs(msme_id=msme_id, new_score=score)
    )
    logger.info(f"Submitted score for {msme_id}: {score_response.abi_return}")

    # Fetch latest score
    score_query = app_client.send.get_score(args=GetScoreArgs(msme_id=msme_id))
    logger.info(f"Queried score for {msme_id}: {score_query.abi_return}")

    # Fetch score history
    history_query = app_client.send.get_score_history(args=GetScoreHistoryArgs(msme_id=msme_id))
    logger.info(f"Score history for {msme_id}: {history_query.abi_return}")

    # Fetch MSME details
    details_query = app_client.send.get_msme_details(args=GetMsmeDetailsArgs(msme_id=msme_id))
    logger.info(f"Details for MSME {msme_id}: {details_query.abi_return}")

    # Demo hello method
    hello_response = app_client.send.hello(args=HelloArgs(name="world"))
    logger.info(
        f"Hello test on {app_client.app_name} ({app_client.app_id}): "
        f"{hello_response.abi_return}"
    )
