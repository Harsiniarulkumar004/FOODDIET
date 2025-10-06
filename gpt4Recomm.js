import OpenAI from 'openai';
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


export async function generateMealPlan(userProfile, foodPreferences) {
const prompt = `Create a personalized Indian meal plan for ${userProfile.age} years old ${userProfile.gender} with ${userProfile.dietType} diet, considering ${foodPreferences.region} cuisine, budget of ${foodPreferences.budget} per meal, and seasonal foods.`;


const completion = await client.chat.completions.create({
model: 'gpt-4',
messages: [{ role: 'user', content: prompt }],
});


return completion.choices[0].message.content;
}
