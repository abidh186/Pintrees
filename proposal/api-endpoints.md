# API Endpoints

# Root

- GET `/` \* gets homepage

# Users

- GET `/api/users`
  - Fetches all the users
- GET `/api/users/user_id`
  - Fetches user profile
- PATCH `/api/users/user_id`
  - Allows user to edit profile
- POST `/api/users`
  - Creates new user

# Boards

- GET `/api/users/user_id/boards`
  - Fetches all boards of a specific user
- GET `/api/boards/board_id`
  - Fetches a single board
- POST `/api/boards`
  - Creates a new board for a user
- DELETE `/api/boards/board_id`
  - Deletes selected board of a user
- PATCH `/api/boards/board_id`
  - Allows user to edit board

# Pins

- GET `/api/users/user_id/pins`
  - Fetches all pins from a user
- GET `/api/boards/board_id/pins`
  - Fetches all pins from a specific board
- GET `api/pins/pin_id`
  - Fetches a specific pin
- POST `api/pins`
  - Allows user to create a pin on a board
- PATCH `api/pins/pin_id`
  - Allows user to edit a pin
- DELETE `api/pins/pin_id`
  - Allows user to delete a pin
