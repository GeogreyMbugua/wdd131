WDD Frontend Development Standards
Overview
Web frontend development standards ensure that web applications are built with consistency, quality, and best practices in mind. Adhering to these standards helps create a cohesive user experience, improves maintainability, and enhances performance across different browsers and devices. By following established guidelines for HTML, CSS, and JavaScript, developers can ensure that their code is clean, efficient, and accessible to all users. These standards also promote collaboration among development teams, making it easier to work together on projects and share codebases.

Many of these development standards are modeled after The Front-End Checklist by David Dias.
Most supplemental references are to MDN Web Docs sources.
✅ Checklist
All folders and files follow the naming convention rules which include lowercase only, no spaces, and are semantically meaningful (check with the specific course guidelines).
The Document Type declaration <!doctype html> is located at the top of the HTML document.
The html element lang attribute <html lang="en-US"> is provided.
Head
Meta Charset Attribute is used. <meta charset="utf-8">
Meta Viewport Element <meta name="viewport" content="width=device-width, initial-scale=1">
The viewport of the browser is the viewable area. The content of rendered web document most likely is not the same size, therefore, scroll bars are provided by the browser. The viewport meta element considers the device width and scales the content the best it can for a given viewport. Setting the viewport to consider the device or user agent supports responsive design.

width=device-width sets the width of the viewport to the width of the device.
initial-scale=1 sets the initial zoom level when the user visits the page.
Title Element
Meta Description Element
Meta Author Element
Eternal CSS file references are used and in the proper order
HTML
HTML is W3C compliant. W3C validator
Semantic Elements are used. Why? is this important
No broken links are found on the page. W3C Link Checker
CSS
CSS is W3C compliant – W3C validator
Unique ID selectors – if an ID selector is used, it is unique to a page (the planned use of class selector is preferred)
JavaScript
No errors nor references to unused JavaScript functions.
No output to the console in the published version of the page.
Other
Images are optimized to fit the design needs of the site.
Image aspect ratios are not changed for any images.
Every image has an alt attribute assigned and it is relevant in describing the non-decorative image.
A heading <h1> is required and there is only one instance on a document.
The <h1> heading should accurately represents the main topic or purpose of the page and match very closely with the content of the document's <title> It should succinctly summarize the content and provide a clear indication of what the page is about. While <h1> headings can be styled using CSS for visual hierarchy, their primary purpose is to provide semantic meaning to the content.

Headings <h1>-<h6> are used in the proper order to outline the page.
Use heading elements (<h2> to <h6>) to create a logical hierarchy of content. Headings should be nested appropriately to reflect the structure and relationship between different sections of the page. – Heading Levels Deque University

No color contrast violations at the AA level. Use the browser's development tool (DevTools) CSS Overview, or use a tool like siegemedia's Contrast Checker to check color contrast.
Ensure that the page's weight remains under 500KB as measured by the DevTools network transfer load indicator.
Adhere to design principles such as alignment, proximity, contrast, repetition, and usable typography.
Maintain an appealing visual appearance across all pages, ensuring responsiveness, uniformity, and consistency.
Guarantee the absence of spelling and grammatical errors throughout the site.
Test all pages for responsive web design, ensuring appropriately sized text and links, with no horizontal scrolling nor dead space.
Verify that the page functions correctly and delivers content as expected.
Accessibility test errors and warnings are reviewed
Do not use third-party CSS frameworks or libraries unless directed that they are allowed.