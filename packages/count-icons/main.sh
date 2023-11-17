#!/bin/bash
#
# 统计 i- 开头的图标名称
#
output_file="./packages/count-icons/output-count_icons.txt"
if [ -f "$output_file" ]; then
    rm "$output_file"
fi
echo "# 统计 i- 开头的图标名称" >> "$output_file"
find "src" -type f -name "*.vue" | while read -r file; do
    grep -o "i-[^\`'\" ]*" "$file" | sed "s/^//" >> "$output_file"
done
sort -u "$output_file" -o "$output_file"
echo "统计完成！结果已写入 $output_file 文件中。"
