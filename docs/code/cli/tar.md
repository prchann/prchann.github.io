# tar

## tar

```bash
# create an archive file with compress
tar -czvf archive.tar.gz <file> <dir>

# create an archive file (with compress) adding files in `dir/`
cd dir/ && tar -czvf ../archive.tar.gz . && cd -
# or
tar -czvf archive.tar.gz -C dir .
# the `-C dir` tells tar to change the current directory to my_directory,
# and then `.` means "add the entire current directory" 
# (including hidden files and sub-directories)


# extract an archive file
tar -xvf archive.tag.gz
```

## zip

```bash
zip [options] zipfile files_list

# zip file.js:
zip archive.zip file.js

# zip a directory recursively:
zip -r archive.zip directory

unzip myfile.zip
```



