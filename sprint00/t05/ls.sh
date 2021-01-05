ls -lh $@ | awk ' { print $9, $5} ' | sed '1d' | sort
