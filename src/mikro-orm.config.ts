import { Migrator } from '@mikro-orm/migrations';
import { EntityCaseNamingStrategy, defineConfig } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

export default function getMikroORMConfig() {
	return defineConfig({
		dbName: process.env.DATABASE_DB || 'feature-flag-db',
		host: process.env.DATABASE_HOST,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		namingStrategy: EntityCaseNamingStrategy,
		port: process.env.DATABASE_PORT
			? parseInt(process.env.DATABASE_PORT, 10)
			: 5432,
		entities: ['dist/entity/*entity.js'],
		entitiesTs: ['src/entity/*entity.ts'],
		metadataProvider: TsMorphMetadataProvider,
		debug: process.env?.DEBUG === 'true',
		extensions: [Migrator],
		migrations: {
			path: 'dist/database/migrations',
			pathTs: 'src/database/migrations',
			tableName: 'mikroOrmMigration',
		},
		pool: {
			min: 5,
		},
		highlighter: process.env.DEBUG ? new SqlHighlighter() : undefined,
	});
}
