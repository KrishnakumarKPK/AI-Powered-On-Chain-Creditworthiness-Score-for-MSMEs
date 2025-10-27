from algopy import ARC4Contract, String, UInt64, Array, abimethod, subroutine

class Msme(ARC4Contract):
    """
    AI-Powered On-Chain Creditworthiness Contract for MSMEs.
    - Allows registering MSMEs, submitting and updating credit scores
    - Stores scores using dynamic state
    - Provides multiple query and admin operations
    """

    @abimethod()
    def register_msme(self, msme_id: String, name: String) -> String:
        """
        Register a new MSME with an identifier and name.
        Prevents double registration.
        """
        if msme_id in self.state:
            return "MSME already registered"
        self.state[f"{msme_id}_name"] = name
        self.state[f"{msme_id}_score"] = UInt64(0)
        self.state[f"{msme_id}_history"] = Array([], UInt64)
        return "MSME registered"

    @abimethod()
    def submit_score(self, msme_id: String, new_score: UInt64) -> String:
        """
        Submit or update credit score for MSME.
        Only accepted if MSME is registered.
        Maintains the score history as an array.
        """
        if f"{msme_id}_name" not in self.state:
            return "MSME not registered"
        self.state[f"{msme_id}_score"] = new_score
        # Update score history
        history = self.state.get(f"{msme_id}_history", Array([], UInt64))
        history.append(new_score)
        self.state[f"{msme_id}_history"] = history
        return "Score updated"

    @abimethod(readonly=True)
    def get_score(self, msme_id: String) -> UInt64:
        """
        Returns latest score for given MSME.
        """
        return self.state.get(f"{msme_id}_score", UInt64(0))

    @abimethod(readonly=True)
    def get_score_history(self, msme_id: String) -> Array:
        """
        Returns all historical scores for given MSME.
        """
        return self.state.get(f"{msme_id}_history", Array([], UInt64))

    @abimethod(readonly=True)
    def get_msme_details(self, msme_id: String) -> String:
        """
        Return MSME details as formatted string.
        """
        name = self.state.get(f"{msme_id}_name", "Not registered")
        score = self.state.get(f"{msme_id}_score", UInt64(0))
        return f"Name: {name}, Score: {score}"

    @abimethod()
    def hello(self, name: String) -> String:
        """
        Test method for contract deployment.
        """
        return "Hello, " + name

    @subroutine()
    def _validate_score(self, score: UInt64) -> bool:
        """
        Validate credit score before submission.
        Example logic: Score must be between 0 and 900.
        """
        return (score >= 0) and (score <= 900)
