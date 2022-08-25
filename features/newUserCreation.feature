Feature: Create User

	# to check first cucumber works or not
	Scenario: Verify adding user to Users table
		Given The browser is open
		When open the URL and login
        When add User
		Then User must be created under users table