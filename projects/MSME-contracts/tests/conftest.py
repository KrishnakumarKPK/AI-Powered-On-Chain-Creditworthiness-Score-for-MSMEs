import pytest
from algokit_utils import AlgorandClient
from algokit_utils.config import config
from pathlib import Path
from dotenv import load_dotenv
import os

# Automatically load network-specific or generic .env files for secrets and config
@pytest.fixture(autouse=True, scope="session")
def environment_fixture() -> None:
    env_path = Path(__file__).parent.parent / ".env"
    if env_path.exists():
        load_dotenv(env_path)
        print(f"Loaded environment from {env_path}")
    else:
        print(f"No .env file found at {env_path}, continuing without loading.")

# Enable debug output and optionally trace all transactions
config.configure(
    debug=True,
    # trace_all=True,  # uncomment to trace all transactions
)

@pytest.fixture(scope="session")
def algorand_client() -> AlgorandClient:
    """Returns an AlgorandClient configured with network params from environment (.env)."""
    # Allow dynamic selection of network via ENV var, fallback to localnet
    network = os.getenv("ALGOD_NET", "localnet")
    return AlgorandClient.from_environment(network=network)
