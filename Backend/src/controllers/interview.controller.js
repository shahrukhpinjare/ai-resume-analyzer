// const pdfParse = require("pdf-parse");
// const {
//   generateInterviewReport,
//   generateResumePDF,
// } = require("../services/ai.service");
// const interviewReportModel = require("../models/interviewReport.model");

// // @description Controller to generate interview report based on user self description, resume pdf and job description
// async function generateInterviewReportController(req, res) {
//   // Claude
//   let resumeText = "";

//   if (req.file) {
//     const resumeContent = await new pdfParse.PDFParse(
//       Uint8Array.from(req.file.buffer),
//     ).getText();

//     resumeText = resumeContent.text;
//   }
//   //

//   // const resumeContent = await new pdfParse.PDFParse(
//   //   Uint8Array.from(req.file.buffer),
//   // ).getText();

//   const { selfDescription, jobDescription } = req.body;

//   const interviewReportByAi = await generateInterviewReport({
//     resume: resumeText,
//     // resume: resumeContent.text,
//     selfDescription,
//     jobDescription,
//   });

//   const interviewReport = await interviewReportModel.create({
//     user: req.user.id,
//     resume: resumeText,
//     // resume: resumeContent.text,
//     selfDescription,
//     jobDescription,
//     ...interviewReportByAi,
//   });

//   res.status(201).json({
//     message: "Interview report generated successfully",
//     interviewReport,
//   });
// }

// // @description Controller to get interview report by interviewId
// async function getInterviewReportByIdController(req, res) {
//   const { interviewId } = req.params;
//   const interviewReport = await interviewReportModel.findOne({
//     _id: interviewId,
//     user: req.user.id,
//   });

//   if (!interviewReport) {
//     return res.status(404).json({ message: "Interview report not found" });
//   }

//   res.status(200).json({
//     message: "Interview report fetched successfully",
//     interviewReport,
//   });
// }

// // @description Controller to get all interview reports of logged in user
// async function getAllInterviewReportsController(req, res) {
//   const interviewReports = (
//     await interviewReportModel.find({ user: req.user.id })
//   )
//     .sort({ createdAt: -1 })
//     .select(
//       "-resume -selfDescription -jobDescription -__v -technicalQuestion -behavioralQuestion -skillGap -preparationPlan",
//     );
//   res.status(200).json({
//     message: "Interview reports fetched successfully",
//     interviewReports,
//   });
// }

// // @description Controller to generate resume PDF based on user self description, resume and job description.

// async function generateResumePdfController(req, res) {
//   const { interviewReportId } = req.params;

//   const interviewReport =
//     await interviewReportModel.findById(interviewReportId);

//   if (!interviewReport) {
//     return res.status(404).json({
//       message: "Interview report not found.",
//     });
//   }

//   const { resume, jobDescription, selfDescription } = interviewReport;

//   const pdfBuffer = await generateResumePDF({
//     resume,
//     jobDescription,
//     selfDescription,
//   });

//   res.set({
//     "Content-Type": "application/pdf",
//     "content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`,
//   });

//   res.send(pdfBuffer);
// }

// module.exports = {
//   generateInterviewReportController,
//   getInterviewReportByIdController,
//   getAllInterviewReportsController,
//   generateResumePdfController,
// };

// Claude Code
const pdfParse = require("pdf-parse");
const {
  generateInterviewReport,
  generateResumePDF,
} = require("../services/ai.service");
const interviewReportModel = require("../models/interviewReport.model");

// @description Controller to generate interview report based on user self description, resume pdf and job description
async function generateInterviewReportController(req, res, next) {
  // TEMP DEBUG: declared outside try so it's visible in the catch block too
  let interviewReportByAi;

  try {
    let resumeText = "";

    if (req.file) {
      const resumeContent = await new pdfParse.PDFParse(
        Uint8Array.from(req.file.buffer),
      ).getText();

      resumeText = resumeContent.text;
    }

    const { selfDescription, jobDescription } = req.body;

    interviewReportByAi = await generateInterviewReport({
      resume: resumeText,
      selfDescription,
      jobDescription,
    });

    const interviewReport = await interviewReportModel.create({
      user: req.user.id,
      resume: resumeText,
      selfDescription,
      jobDescription,
      ...interviewReportByAi,
    });

    res.status(201).json({
      message: "Interview report generated successfully",
      interviewReport,
      // TEMP DEBUG: raw object returned by Gemini, before it got merged
      // into interviewReport. Remove this field once the AI issue is fixed.
    });
  } catch (err) {
    // TEMP DEBUG: attach the raw AI output to the error so app.js's error
    // handler can show it, even when the failure happened AFTER the AI call
    // (e.g. mongoose validation) and we never reached res.json().
    next(err); // forward to the error handler in app.js
  }
}

// @description Controller to get interview report by interviewId
async function getInterviewReportByIdController(req, res) {
  const { interviewId } = req.params;
  const interviewReport = await interviewReportModel.findOne({
    _id: interviewId,
    user: req.user.id,
  });

  if (!interviewReport) {
    return res.status(404).json({ message: "Interview report not found" });
  }

  res.status(200).json({
    message: "Interview report fetched successfully",
    interviewReport,
  });
}

// @description Controller to get all interview reports of logged in user
async function getAllInterviewReportsController(req, res) {
  const interviewReports = (
    await interviewReportModel.find({ user: req.user.id })
  )
    .sort({ createdAt: -1 })
    .select(
      "-resume -selfDescription -jobDescription -__v -technicalQuestion -behavioralQuestion -skillGap -preparationPlan",
    );
  res.status(200).json({
    message: "Interview reports fetched successfully",
    interviewReports,
  });
}

// @description Controller to generate resume PDF based on user self description, resume and job description.

async function generateResumePdfController(req, res) {
  const { interviewReportId } = req.params;

  const interviewReport =
    await interviewReportModel.findById(interviewReportId);

  if (!interviewReport) {
    return res.status(404).json({
      message: "Interview report not found.",
    });
  }

  const { resume, jobDescription, selfDescription } = interviewReport;

  const pdfBuffer = await generateResumePDF({
    resume,
    jobDescription,
    selfDescription,
  });

  res.set({
    "Content-Type": "application/pdf",
    "content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`,
  });

  res.send(pdfBuffer);
}

module.exports = {
  generateInterviewReportController,
  getInterviewReportByIdController,
  getAllInterviewReportsController,
  generateResumePdfController,
};
