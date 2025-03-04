import path from "path";

// join two or more file

const fullPath = path.join("/path", "index.py", "file.java");
// console.log(fullPath);

// absolute path

const absolutePath = path.resolve();
// console.log(absolutePath);

//extension

const ext = path.extname("resume.pdf");

if (ext === ".pdf") {
  console.log("ok");
} else {
  console.log("not support");
}
