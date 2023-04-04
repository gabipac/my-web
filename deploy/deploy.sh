echo "Clean website folder..."
### CLEAN WEBSITE FOLDER by remove files from remote including hidden files:
ssh -p21098 cioclrha@66.29.141.35 rm -rf '/home/cioclrha/imaginegabi/.*'

### UPLOAD TO SERVER excluding some files:
echo "Upload files to the website folder..."
rsync -a -v -z --exclude 'node_modules' --exclude '.gitignore' --exclude '.git' --exclude '.idea' --exclude '.DS_Store' '/Users/simincornelciocan/Projects/OTHERS/gaby-web/' --rsh='ssh -p21098' cioclrha@66.29.141.35:/home/cioclrha/imaginegabi

echo "Deploy success!"