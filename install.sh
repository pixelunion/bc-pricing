echo 'Installing'
# sync() {
#   echo
#   echo "----- Installing BC Pricing"
#   echo
#   rsync -v -h -r -i --delete "$2" "$3"
# }

sync "Templates" "$DIR/templates/pricing" "../../../templates/"
echo $DIR
echo $(dirname $(dirname "$0"))
