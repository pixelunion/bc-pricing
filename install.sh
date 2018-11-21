echo 'Installing'
echo dirname $3
sync() {
  echo
  echo "----- Installing BC Pricing"
  echo
  rsync -v -h -r -i --delete "$2" "$3"
}

sync "Templates" "$DIR/templates/pricing" "../../../templates/"
