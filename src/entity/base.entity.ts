import { PrimaryKey, Property, UuidType } from '@mikro-orm/core';

export default abstract class BaseEntity {
	@PrimaryKey({ type: UuidType, defaultRaw: 'uuid_generate_v4()' })
	id!: string;

	@Property()
	createdAt = new Date();

	@Property({
		onUpdate: () => new Date(),
	})
	updatedAt = new Date();
}
