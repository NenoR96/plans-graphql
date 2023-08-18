import { GraphQLInt, GraphQLString, GraphQLInputObjectType } from 'graphql';

export const PriceTypeInput = new GraphQLInputObjectType({
    name: 'PriceInput',
    fields: {
        id: { type: GraphQLInt },
        price: { type: GraphQLInt },
        market: { type: GraphQLString },
        type: { type: GraphQLString },
    }
});

export const FeatureTypeInput = new GraphQLInputObjectType({
    name: 'FeatureInput',
    fields: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString }
    }
});

export const PriceFeatureTypeInput = new GraphQLInputObjectType({
    name: 'PriceFeatureTypeInput',
    fields: {
        id: { type: GraphQLInt },
        displayPriority: { type: GraphQLInt },
        allowance: { type: GraphQLInt },
        price: { type: PriceTypeInput },
        priceId: { type: GraphQLInt },
        feature: { type: FeatureTypeInput },
        featureId: { type: GraphQLInt }
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