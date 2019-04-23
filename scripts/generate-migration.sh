echo ""
echo "Generating Migration Script"
echo ""

echo " -> Step 1/2: Generating Migrtaion Directory."
echo ""

mkdir -p ./src/db
mkdir -p ./src/db/seeders
mkdir -p ./src/db/migrations
mkdir -p ./src/models

echo ""
echo " -> Migration Directory completed."
echo ""

echo ""
echo " -> Step 2/2: Generating Migration Script."

cat > ./src/db/migrations/$(date +"%Y%m%d%H%M%S")-$1.ts << EOF
import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

module.exports = {
  // tslint:disable-next-line:variable-name
  up: async (queryInterface: QueryInterface, Sq: Sequelize) => {
    // Write migration code here.
  },

  // tslint:disable-next-line:variable-name
  down: async (queryInterface: QueryInterface, Sq: Sequelize) => {
    // If migration fails, this will be called. Rollback your migration changes.
  },
};
EOF
echo ""
echo " -> Migration Script generated."
echo ""

echo " -> Done."
echo ""