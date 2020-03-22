import { GraphQLObjectType, GraphQLString} from 'graphql';

export const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
    }) 
});
