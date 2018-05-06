import api from '../api.json';

import {normalize, schema} from 'normalizr';

// const media = new schema.Entity(key, definicion esquema, opciones);
const media = new schema.Entity('media', {}, {
	idAttribute: 'id',//mediaId
	processStrategy: (value,parent,key) => ({...value,category:parent.id})//anadimos keys
});

const category = new schema.Entity('categories', {
	playlist:new schema.Array(media),
});

const categories = {categories: new schema.Array(category)};

const normalizedData = normalize(api, categories);

export default normalizedData;