// js/result.js

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Your Career Recommendations", 20, 20);

  // Placeholder career data
  const careers = [
    {
      title: "Software Engineer",
      desc: "Perfect for analytical thinkers who enjoy problem solving, logic, and building apps or websites."
    },
    {
      title: "UI/UX Designer",
      desc: "Great fit for creative minds who love improving user experiences and creating modern interfaces."
    },
    {
      title: "Digital Marketer",
      desc: "Ideal for those interested in branding, social media, content creation, and business growth."
    }
  ];

  let y = 40;
  careers.forEach((career, i) => {
    doc.setFontSize(14);
    doc.text(`${i + 1}. ${career.title}`, 20, y);
    y += 8;
    doc.setFontSize(11);
    doc.text(career.desc, 25, y);
    y += 12;
  });

  doc.save("Career_Recommendations.pdf");
}
