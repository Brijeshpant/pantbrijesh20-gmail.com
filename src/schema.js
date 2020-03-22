import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { ProductType } from './ProductType'

const products = [{ id: "1", name: "bp" },
{ id: "2", name: "bp1" }];
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        products: {
            type: new GraphQLList(ProductType),
            description: 'List of All Authors',
            resolve: () => products
        },
        product: {
            type: ProductType,
            args: { id: { type: GraphQLString } },
            resolve: (parent, args) => {
                return products.find((p) => p.id == args.id);
            }
        }
    })
});

export const schema = new GraphQLSchema({
    query: RootQuery
});