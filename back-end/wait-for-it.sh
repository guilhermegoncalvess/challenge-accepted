
set -e
  
host="$1"
shift
  
until PGPASSWORD=$POSTGRES_PASSWORD psql -h "$host" -U $POSTGRES_USER -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
yarn typeorm migration:run
exec "$@"