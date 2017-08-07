# Skelli (BETA)
A simple tool for quickly creating files

## Installation

#### NPM
    npm skelli -g

## Usage

#### Basic Format
    skelli [command] [name] [options...]

#### Creating a Text File
    skelli txt hello        
    // Outputs a single text file

    skelli txt hello -m 4   
    // Outputs 4 txt files (hello0.txt, hello1.txt...)
    // Up to 100 at a time

## Templates Supported (w/ Commands)
+ HTML (html)
+ CSS (css)
+ Java (java)
+ C++ (cpp)
+ Go (go)
+ Python (python)
+ NPM Package (npmpkg)
+ ReadMe Markdown (readme)
+ Rich Text (rtf)
+ Plain Text (txt)

## Contributing

### To Add a New Template
1. Fork this repo
2. Create a template file and store it in the template folder
3. Add the template file name and command to the template_codes file
4. Submit a pull request

## License
MIT
