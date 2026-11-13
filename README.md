# FridgeBite

FridgeBite is a food discovery and social cooking app that turns a photo of the ingredients in your fridge into personalized recipe ideas. Users can choose a cuisine, set a maximum cooking time, save recipes, discover restaurants, and connect with people who share their interests in food.

## Product Vision

Help people waste less food, cook with more confidence, and discover a community around the meals and restaurants they love.

## Core Features

### 1. Fridge-to-Recipe Suggestions

- Upload or take a photo of ingredients in the fridge.
- Use image recognition to identify likely ingredients.
- Let users confirm, remove, or add ingredients manually.
- Suggest recipes based on available ingredients.
- Filter suggestions by:
  - Cuisine
  - Maximum preparation and cooking time
  - Dietary preferences
  - Difficulty
  - Missing ingredients
- Show substitutions when an ingredient is unavailable.
- Display ingredients, quantities, steps, estimated time, servings, and nutrition information.

### 2. Recipe Discovery and Publishing

- Browse recipes by cuisine, ingredient, meal type, popularity, or cooking time.
- Save recipes to personal collections.
- Upload and publish original recipes.
- Add photos, ingredients, instructions, tags, and serving information.
- Like, comment on, and share recipes.
- Report inappropriate or unsafe content.

### 3. Restaurant Discovery

- Find restaurants by location, cuisine, price range, rating, and dietary options.
- View restaurant details, photos, menus, hours, and map location.
- Rate restaurants and write reviews.
- Save restaurants to a personal list.
- See recommendations from friends and people the user follows.

### 4. Food-Focused Social Community

- Create a user profile with favorite cuisines and food interests.
- Follow other users, recipe creators, and restaurant reviewers.
- Send friend requests or connect with people who share interests.
- View a personalized feed of recipes, reviews, photos, and restaurant discoveries.
- Like, comment on, and share community posts.
- Support privacy controls for profiles, recipes, and activity.

## Example User Flow

1. A user uploads a photo of ingredients in their fridge.
2. FridgeBite identifies tomatoes, eggs, spinach, onions, and rice.
3. The user confirms the ingredients, chooses Italian cuisine, and sets a 30-minute limit.
4. The app recommends several recipes and explains which ingredients are missing, if any.
5. The user saves a recipe, cooks it, and uploads a photo with a rating.
6. The user discovers a nearby Italian restaurant, leaves a review, and follows another food creator.

## Suggested MVP

The first release should focus on the smallest useful experience:

- Account creation and login
- Ingredient photo upload
- Ingredient confirmation and editing
- Recipe suggestions with cuisine and time filters
- Recipe detail and save functionality
- User profiles and following
- Basic recipe publishing
- Restaurant search, ratings, and reviews

Social feeds, direct messaging, advanced personalization, nutrition analysis, and restaurant integrations can follow after the core recipe workflow is validated.

## Suggested Technology Stack

The stack can change based on implementation preferences, but one possible approach is:

- **Frontend:** Next.js, React, and TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Next.js API routes or Node.js with NestJS
- **Database:** PostgreSQL
- **Authentication:** Auth.js, Clerk, or Supabase Auth
- **File storage:** Amazon S3, Cloudflare R2, or Supabase Storage
- **Image recognition:** A vision-capable AI model or a dedicated food recognition API
- **Recipe generation:** An AI service with structured JSON output and safety validation
- **Maps and restaurants:** Google Maps Platform, Yelp Fusion, or another restaurant data provider
- **Deployment:** Vercel for the web app and a managed PostgreSQL provider

## High-Level Architecture

```text
Web / Mobile Client
        |
        v
Application API
   |     |      |
   v     v      v
Auth  Recipe  Social & Restaurant Services
        |
        v
Ingredient Recognition -> Recipe Recommendation
        |
        v
PostgreSQL Database + Image Storage
```

## Main Data Models

- **User:** profile, location, dietary preferences, favorite cuisines
- **Ingredient:** name, category, quantity, confidence score
- **Fridge Scan:** uploaded image, detected ingredients, confirmed ingredients
- **Recipe:** title, description, cuisine, ingredients, steps, time, difficulty, author
- **Saved Recipe:** user and recipe relationship
- **Restaurant:** name, location, cuisine, price range, hours, external provider ID
- **Restaurant Review:** rating, text, photos, author, restaurant
- **Follow:** follower and followed user relationships
- **Post:** recipe, review, meal photo, or food discovery shared by a user
- **Comment / Like:** engagement on recipes, reviews, and posts

## Important Product Considerations

- Clearly label AI-generated recipes and allow users to report problems.
- Ask users to confirm detected ingredients before generating recipes.
- Avoid making medical claims about allergies or nutrition.
- Treat allergy preferences as safety-critical and show a disclaimer that users must verify ingredients themselves.
- Moderate reviews, comments, uploaded images, and recipes.
- Protect user location and give users control over profile visibility.
- Cache restaurant data and comply with the selected restaurant provider’s terms.

## Future Enhancements

- Pantry inventory and expiration-date reminders
- Grocery list generation
- Meal planning for a week
- Barcode scanning
- Voice-guided cooking mode
- Recipe scaling by serving size
- Smart recommendations based on cooking history
- Restaurant reservations and ordering integrations
- Group cooking challenges and local food communities
- Monetization through premium meal planning, creator tools, or restaurant partnerships

## Success Metrics

- Percentage of users who complete a fridge scan
- Recipe suggestion acceptance rate
- Saved-to-cooked recipe conversion
- Weekly active users
- Recipe publishing and review activity
- Follow and engagement rates
- Restaurant search-to-review conversion
- User retention after the first week and first month

## License

Choose a license before publishing the project. MIT is a simple option for an open-source project, while a private commercial project may use a proprietary license.
