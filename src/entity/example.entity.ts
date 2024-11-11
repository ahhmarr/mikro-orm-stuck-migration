import { Entity } from '@mikro-orm/core';

import BaseEntity from './base.entity';

@Entity({
	tableName: 'Example',
})
export default class ExampleEntity extends BaseEntity {}
