import { GraphQLInt, GraphQLString, GraphQLInputObjectType, GraphQLList } from 'graphql';

export const PriceTypeInput: any = new GraphQLInputObjectType({
    name: 'PriceInput',
    fields: () => ({
        id: { type: GraphQLInt },
        price: { type: GraphQLInt },
        market: { type: GraphQLString },
        type: { type: GraphQLString },
        priceFeature: { type: PriceFeatureTypeInput },
    })
});

export const FeatureTypeInput = new GraphQLInputObjectType({
    name: 'FeatureInput',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        categories: { type: new GraphQLList(CategoryTypeInput) }

    })
});

export const PriceFeatureTypeInput = new GraphQLInputObjectType({
    name: 'PriceFeatureTypeInput',
    fields: {
        id: { type: GraphQLInt },
        displayPriority: { type: GraphQLInt },
        allowance: { type: GraphQLInt },
        features: { type: new GraphQLList(FeatureTypeInput) }
    }
});

export const CategoryTypeInput = new GraphQLInputObjectType({
    name: 'CategoryInput',
    fields: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
    }
});

export const SearchFeaturesInput = new GraphQLInputObjectType({
    name: 'SearchFeaturesInput',
    fields: {
        text: { type: GraphQLString },
        limit: { type: GraphQLInt },
        skip: { type: GraphQLInt },
    }
});