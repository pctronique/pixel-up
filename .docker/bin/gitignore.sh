#!/bin/bash

#/////////////////////////////////////
#//    DEVELOPPEUR : PCTRONIQUE     //
#/////////////////////////////////////

folder_main=${0%/*}/../../
folderLoad=$folder_main

load_gitignoare() {
   if [ -e $folderLoad/.gitignore ]
   then
      while read line  
      do   
         if [[ (! -z $line) && (! $line = ".") && (! $line = "..") ]]
         then
            rm -rf $folderLoad/$line
         fi
      done < $folderLoad/.gitignore
   fi
}

load_gitignoare

readarray -d '' array < <(find $folder_main -name ".gitignore" -print0)

for value in "${array[@]}"
do
   value="${value/\.gitignore/}"
   value="${value/"$folder_main"/}"
   folderLoad=$folder_main$value
   if [[ $folderLoad != "/" ]]; then
      load_gitignoare
   fi
done

exit 0

