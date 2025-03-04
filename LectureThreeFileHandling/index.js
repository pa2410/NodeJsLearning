import { readFile, writeFile, appendFile, mkdir } from "fs/promises";

// read file content
const read_file = async (fileName) => {
  const data = await readFile(fileName, "utf-8");
  console.log("data", data);
};

// read_file("sample.txt");

// create file content

const create_file = async (fileName, content) => {
  await writeFile(fileName, content);
  console.log("File created...!");
};

// create_file("ai.py", "this is a python ai file");

// add or update content

const update_file = async (fileName, content) => {
  await appendFile(fileName, content);
  console.log("add content successfully");
};

// update_file("ai.py", "\nlearning node js now");

// make directory create folder

const create_dir = async (dir) => {
  await mkdir(dir, { recursive: true });
};
// components/jsfile.js
create_dir("components/jsfile");
