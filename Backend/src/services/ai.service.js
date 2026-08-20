// const { GoogleGenAI } = require("@google/genai");
// const { z } = require("zod");
// const { zodToJsonSchema } = require("zod-to-json-schema");
// const puppeteer = require("puppeteer");

// const ai = new GoogleGenAI({
//   apiKey: process.env.GOOGLE_GENAI_API_KEY,
// });

// async function invokeGeminiAi() {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-3.5-flash",
//       contents: "Hello gemini ! Explain what is Interview",
//     });
//     console.log(response.text);
//   } catch (err) {
//     console.log(err);
//   }
// }

// const interviewReportSchema = z.object({
//   matchScore: z
//     .number()
//     .describe(
//       "A score between 0 and 100 indicating how well the candidate's profile matches the job describe, based on their resume and self-describe.",
//     ),

//   technicalQuestions: z
//     .array(
//       z.object({
//         question: z
//           .string()
//           .describe("The technical question can be asked in the interview"),
//         intention: z
//           .string()
//           .describe("The intention of interviewer behind asking this quetions"),
//         answer: z
//           .string()
//           .describe(
//             "How to answer this quetin, what points to cover, what approch to take etc.",
//           ),
//       }),
//     )
//     .describe(
//       "Tachnical questions that can be asked in the interview along with their intention and how to answer them.",
//     ),

//   behavioralQuestions: z
//     .array(
//       z.object({
//         question: z
//           .string()
//           .describe("The technical question can be asked in the interview"),
//         intention: z
//           .string()
//           .describe("The intention of interviewer behind asking this quetions"),
//         answer: z
//           .string()
//           .describe(
//             "How to answer this question, what points to cover, what approch to take etc.",
//           ),
//       }),
//     )
//     .describe(
//       "Behavioral questions that can be asked in the interview along with their intention and how to answer them.",
//     ),

//   skillGaps: z
//     .array(
//       z.object({
//         skill: z
//           .string()
//           .describe(
//             "The skill which the candidate is lacking and needs to improve",
//           ),
//         severity: z
//           .enum(["low", "medium", "high"])
//           .describe(
//             "The severity of this skill gap, i.e how important is this skill for the job role and how much it will impact the candidate's performance in the interview",
//           ),
//       }),
//     )
//     .describe(
//       "List of skill gaps in the candidate's profile along with their intention and how to answer them.",
//     ),

//   preparationPlan: z
//     .array(
//       z.object({
//         day: z
//           .number()
//           .describe("The day number in the preparation plan, starting from 1"),
//         focus: z
//           .string()
//           .describe(
//             "The main focus of this day in the preparation plan, i.e data structures, algorithms, system design, etc.",
//           ),
//         tasks: z.array(
//           z
//             .string()
//             .describe(
//               "List of task to be done on this day to follow the preparation plan, i.e read a book, watch a video, solve a problem, etc.",
//             ),
//         ),
//       }),
//     )
//     .describe(
//       "A day-wise preparation plan for the candidate to follow in order to improve their skills and prepare for the interview effectively, along with the focus of each day and the tasks to be done on that day.",
//     ),
//   title: z
//     .string()
//     .describe(
//       "The title of the job for which the interview report is generated",
//     ),
// });

// async function generateInterviewReport({
//   resume,
//   selfDescription,
//   jobDescription,
// }) {
//   const prompt = `You are an experienced Senior Technical Interviewer.

// Analyze the candidate's Resume, Self Description, and Job Description carefully.

// Generate a professional interview report.

// Return ONLY valid JSON matching the provided schema.

// Instructions:

// 1. Match Score
// - Give a score between 0 and 100.
// - Compare resume with the job description.

// 2. Technical Questions
// - Generate exactly 10 technical interview questions.
// - Every question must contain:
//   - question
//   - intention
//   - answer

// 3. Behavioral Questions
// - Generate exactly 5 behavioral interview questions.
// - Every question must contain:
//   - question
//   - intention
//   - answer

// 4. Skill Gaps
// - Compare Resume with Job Description.
// - List only missing or weak skills.
// - Give severity as low, medium or high.

// 5. Preparation Plan
// - Create a 7-day preparation plan.
// - Each day must contain:
//   - day
//   - focus
//   - tasks (minimum 3 tasks)
//   - description

//   6. Title
// - Generate a short, professional job title (e.g. "Senior Frontend Engineer at Google") based on the Job Description.
// - This is mandatory, never leave it empty.

// Important Rules:
// - Don't assume skills that are not mentioned.
// - Use Resume, Self Description and Job Description only.
// - Return ONLY JSON.
// - No markdown.
// - No explanation:
//                         Resume: ${resume}
//                         Self Description: ${selfDescription},
//                         Job Description: ${jobDescription}`;

//   const response = await ai.models.generateContent({
//     model: "gemini-3.5-flash",
//     contents: prompt,
//     config: {
//       responseMimeType: "application/json",
//       responseSchema: zodToJsonSchema(interviewReportSchema),
//     },
//   });

//   return JSON.parse(response.text);
// }

// async function generatePdfFromHtml(htmlContent) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.setContent(htmlContent, { waitUntil: "networkidle0" });

//   const pdfBuffer = await page.pdf({
//     format: "A4",
//     margin: {
//       top: "20mm",
//       bottom: "20mm",
//       left: "15mm",
//       right: "15mm",
//     },
//   });

//   await browser.close();

//   return pdfBuffer;
// }

// async function generateResumePDF({ resume, selfDescription, jobDescription }) {
//   const resumePdfSchema = z.object({
//     html: z
//       .string()
//       .describe(
//         "The HTML of the resume which can be converted to PDF using any library like puppeteer",
//       ),
//   });

//   const prompt = `Generate resume for a candidate with the following details:

//                       Resume: ${resume}
//                       Self Description: ${selfDescription}
//                       Job Description: ${jobDescription}

//                       the response should be a JSON object with a single field "html" which contains the HTML content of the resume which can be converted to PDF using any library like puppeteer.
//                       the resume should be tailored for the given job description and should highlight the candidate's strengths amd relevent experience. The HTML content should be well-formatted and structured, making it easy to read and visible to pilling.
//                       the content of resume should be not sound like it's generated by AI and should be as close as possible to a real human-written resume.
//                       you can highlight the content using some colors or diffferent font styles but the overall design should be simple and professional.
//                       the content should be ATS friendly, i.e. it should be easily parsed by ATS systems without losing important information.
//                       the resume should not be so lengthy, it should ideally be 1-2 pages long when converted to PDF. Focus on quality rather than quantity and make sure to include all the relevant information that can increase the candidate's changes of getting an interview call for the given job description.
//                       `;

//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: prompt,
//     config: {
//       responseMimeType: "application/json",
//       responseSchema: zodToJsonSchema(interviewReportSchema),
//     },
//   });

//   const jsonContent = JSON.parse(response.text);

//   const pdfBuffer = await generatePdfFromHtml(jsonContent.html);

//   return pdfBuffer;
// }

// module.exports = { generateInterviewReport, generateResumePDF };

// Cluade Code
const { GoogleGenAI, Type } = require("@google/genai");
const { z } = require("zod");
const puppeteer = require("puppeteer");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

async function invokeGeminiAi() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: "Hello gemini ! Explain what is Interview",
    });
    console.log(response.text);
  } catch (err) {
    console.log(err);
  }
}

// -----------------------------------------------------------------------
// This zod schema is now used ONLY to validate what Gemini sends back,
// not to build the responseSchema we hand to Gemini. It gives us a clean,
// specific error message the moment the AI's output doesn't match — instead
// of a confusing Mongoose CastError several steps later.
// -----------------------------------------------------------------------
const interviewReportSchema = z.object({
  matchScore: z
    .number()
    .describe(
      "A score between 0 and 100 indicating how well the candidate's profile matches the job describe, based on their resume and self-describe.",
    ),

  technicalQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The technical question can be asked in the interview"),
        intention: z
          .string()
          .describe("The intention of interviewer behind asking this quetions"),
        answer: z
          .string()
          .describe(
            "How to answer this quetin, what points to cover, what approch to take etc.",
          ),
      }),
    )
    .describe(
      "Tachnical questions that can be asked in the interview along with their intention and how to answer them.",
    ),

  behavioralQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The technical question can be asked in the interview"),
        intention: z
          .string()
          .describe("The intention of interviewer behind asking this quetions"),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approch to take etc.",
          ),
      }),
    )
    .describe(
      "Behavioral questions that can be asked in the interview along with their intention and how to answer them.",
    ),

  skillGaps: z
    .array(
      z.object({
        skill: z
          .string()
          .describe(
            "The skill which the candidate is lacking and needs to improve",
          ),
        severity: z
          .enum(["low", "medium", "high"])
          .describe(
            "The severity of this skill gap, i.e how important is this skill for the job role and how much it will impact the candidate's performance in the interview",
          ),
      }),
    )
    .describe(
      "List of skill gaps in the candidate's profile along with their intention and how to answer them.",
    ),

  preparationPlan: z
    .array(
      z.object({
        day: z
          .number()
          .describe("The day number in the preparation plan, starting from 1"),
        focus: z
          .string()
          .describe(
            "The main focus of this day in the preparation plan, i.e data structures, algorithms, system design, etc.",
          ),
        tasks: z.array(
          z
            .string()
            .describe(
              "List of task to be done on this day to follow the preparation plan, i.e read a book, watch a video, solve a problem, etc.",
            ),
        ),
      }),
    )
    .describe(
      "A day-wise preparation plan for the candidate to follow in order to improve their skills and prepare for the interview effectively, along with the focus of each day and the tasks to be done on that day.",
    ),
  title: z
    .string()
    .describe(
      "The title of the job for which the interview report is generated",
    ),
});

// -----------------------------------------------------------------------
// FIX: This is Gemini's OWN schema format (via the Type enum from
// @google/genai), not zodToJsonSchema's output. zodToJsonSchema emits
// keywords (additionalProperties, $schema, etc.) that Gemini's structured
// output doesn't fully support, which was causing Gemini to return
// inconsistent/malformed JSON (wrong key names, wrong casing, strings
// instead of objects, or garbage placeholder keys). Writing the schema
// directly in Gemini's supported subset fixes that.
// -----------------------------------------------------------------------
const geminiInterviewReportSchema = {
  type: Type.OBJECT,
  properties: {
    matchScore: {
      type: Type.NUMBER,
      description:
        "A score between 0 and 100 indicating how well the candidate's profile matches the job description.",
    },
    technicalQuestions: {
      type: Type.ARRAY,
      description: "Exactly 10 technical interview questions.",
      items: {
        type: Type.OBJECT,
        properties: {
          question: { type: Type.STRING },
          intention: {
            type: Type.STRING,
            description: "Why the interviewer would ask this.",
          },
          answer: {
            type: Type.STRING,
            description: "How to answer it, what points to cover.",
          },
        },
        required: ["question", "intention", "answer"],
        propertyOrdering: ["question", "intention", "answer"],
      },
    },
    behavioralQuestions: {
      type: Type.ARRAY,
      description: "Exactly 5 behavioral interview questions.",
      items: {
        type: Type.OBJECT,
        properties: {
          question: { type: Type.STRING },
          intention: { type: Type.STRING },
          answer: { type: Type.STRING },
        },
        required: ["question", "intention", "answer"],
        propertyOrdering: ["question", "intention", "answer"],
      },
    },
    skillGaps: {
      type: Type.ARRAY,
      description: "Missing or weak skills compared to the job description.",
      items: {
        type: Type.OBJECT,
        properties: {
          skill: { type: Type.STRING },
          severity: {
            type: Type.STRING,
            enum: ["low", "medium", "high"],
          },
        },
        required: ["skill", "severity"],
        propertyOrdering: ["skill", "severity"],
      },
    },
    preparationPlan: {
      type: Type.ARRAY,
      description: "A 7-day preparation plan.",
      items: {
        type: Type.OBJECT,
        properties: {
          day: { type: Type.NUMBER },
          focus: { type: Type.STRING },
          tasks: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "At least 3 tasks for this day.",
          },
        },
        required: ["day", "focus", "tasks"],
        propertyOrdering: ["day", "focus", "tasks"],
      },
    },
    title: {
      type: Type.STRING,
      description:
        'Short, professional job title, e.g. "Senior Frontend Engineer at Google".',
    },
  },
  required: [
    "matchScore",
    "technicalQuestions",
    "behavioralQuestions",
    "skillGaps",
    "preparationPlan",
    "title",
  ],
  propertyOrdering: [
    "matchScore",
    "technicalQuestions",
    "behavioralQuestions",
    "skillGaps",
    "preparationPlan",
    "title",
  ],
};

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  const prompt = `You are an experienced Senior Technical Interviewer.

Analyze the candidate's Resume, Self Description, and Job Description carefully.

Generate a professional interview report.

Return ONLY valid JSON matching the provided schema.

Instructions:

1. Match Score
- Give a score between 0 and 100.
- Compare resume with the job description.

2. Technical Questions
- Generate exactly 10 technical interview questions.
- Every question must contain:
  - question
  - intention
  - answer

3. Behavioral Questions
- Generate exactly 5 behavioral interview questions.
- Every question must contain:
  - question
  - intention
  - answer

4. Skill Gaps
- Compare Resume with Job Description.
- List only missing or weak skills.
- Give severity as low, medium or high.

5. Preparation Plan
- Create a 7-day preparation plan.
- Each day must contain:
  - day
  - focus
  - tasks (minimum 3 tasks)

6. Title
- Generate a short, professional job title (e.g. "Senior Frontend Engineer at Google") based on the Job Description.
- This is mandatory, never leave it empty.

Important Rules:
- Don't assume skills that are not mentioned.
- Use Resume, Self Description and Job Description only.
- Return ONLY JSON.
- No markdown.
- No explanation:
                        Resume: ${resume}
                        Self Description: ${selfDescription},
                        Job Description: ${jobDescription}`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: geminiInterviewReportSchema,
    },
  });

  const parsedJson = JSON.parse(response.text);

  // FIX: validate the AI's output BEFORE it ever reaches Mongoose. If Gemini
  // still sends something malformed, this throws a clear, specific error
  // right here instead of a confusing CastError several layers down.
  const validation = interviewReportSchema.safeParse(parsedJson);

  if (!validation.success) {
    console.error(
      "🔴 Gemini output failed validation:",
      validation.error.issues,
    );
    throw new Error(
      `AI returned data in an unexpected shape: ${JSON.stringify(
        validation.error.issues,
      )}`,
    );
  }

  return validation.data;
}

async function generatePdfFromHtml(htmlContent) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({
    format: "A4",
    margin: {
      top: "20mm",
      bottom: "20mm",
      left: "15mm",
      right: "15mm",
    },
  });

  await browser.close();

  return pdfBuffer;
}

async function generateResumePDF({ resume, selfDescription, jobDescription }) {
  // FIX: this endpoint only needs a single "html" string field. Built in
  // Gemini's native schema format for the same reliability reasons as above.
  const geminiResumePdfSchema = {
    type: Type.OBJECT,
    properties: {
      html: {
        type: Type.STRING,
        description:
          "The full HTML content of the resume, ready to render to PDF.",
      },
    },
    required: ["html"],
  };

  const prompt = `Generate resume for a candidate with the following details:

                      Resume: ${resume}
                      Self Description: ${selfDescription}
                      Job Description: ${jobDescription}

                      the response should be a JSON object with a single field "html" which contains the HTML content of the resume which can be converted to PDF using any library like puppeteer.
                      the resume should be tailored for the given job description and should highlight the candidate's strengths amd relevent experience. The HTML content should be well-formatted and structured, making it easy to read and visible to pilling.
                      the content of resume should be not sound like it's generated by AI and should be as close as possible to a real human-written resume.
                      you can highlight the content using some colors or diffferent font styles but the overall design should be simple and professional.
                      the content should be ATS friendly, i.e. it should be easily parsed by ATS systems without losing important information.
                      the resume should not be so lengthy, it should ideally be 1-2 pages long when converted to PDF. Focus on quality rather than quantity and make sure to include all the relevant information that can increase the candidate's changes of getting an interview call for the given job description.
                      `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: geminiResumePdfSchema,
    },
  });

  const jsonContent = JSON.parse(response.text);

  if (!jsonContent.html) {
    throw new Error("AI did not return HTML content for the resume.");
  }

  const pdfBuffer = await generatePdfFromHtml(jsonContent.html);

  return pdfBuffer;
}

module.exports = { generateInterviewReport, generateResumePDF };
