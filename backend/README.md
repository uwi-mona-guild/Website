**Using environment variables:**
- Don't put secrets in .env.example its only a template
- Make your own local .env
- Copy variables over and add your own things

**Mock Data:**
- Run "npm run load" to load test data
- Add functions to load more models in "utils/load_data.js"
- Add test data in "test_data/". 1 file per model to keep things organized
