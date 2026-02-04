export const generateLearningTaskPrompt = (
  goal: string,
  learningStyle: string,
  timeCommitment: string,
  level: number,
  taskType: string
) => `Generate a learning task for a user with the following preferences:
    - Goal: ${goal}
    - Learning style preference: ${learningStyle || 'Mixed/Flexible'}
    - Time available: ${timeCommitment || 'Flexible'}
    - Current level: ${level} (1 is beginner, 20+ is advanced)
    - Task type: ${taskType}
    
    Format the response as a JSON object with the following structure:
    {
      "title": "Task title",
      "description": "Brief description",
      "content": "Detailed content including steps, instructions, and explanation",
      "quiz": [
        {
          "question": "Question text",
          "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
          "answer": "Correct option"
        }
      ]
    }
    
    Make sure the content aligns with the user's learning style and can be completed within their available time.`;
