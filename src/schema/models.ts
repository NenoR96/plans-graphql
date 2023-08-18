import { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString } from 'graphql';

export const PriceType = new GraphQLObjectType({
    name: 'Price',
    fields: {
        id: { type: GraphQLInt },
        price: { type: GraphQLInt },
        market: { type: GraphQLString },
        type: { type: GraphQLString },
    }
});

export const FeatureType = new GraphQLObjectType({
    name: 'Feature',
    fields: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString }
    }
});

export const PriceFeatureType = new GraphQLObjectType({
    name: 'PriceFeature',
    fields: () => ({
        id: { type: GraphQLInt },
        displayPriority: { type: GraphQLInt },
        allowance: { type: GraphQLInt },
        price: { type: PriceType },
        priceId: { type: GraphQLInt },
        feature: { type: FeatureType },
        featureId: { type: GraphQLInt },
        plan: { type: PlanType },
        planId: { type: GraphQLInt }
    })
});

export const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
    }
});

export const PlanType:any = new GraphQLObjectType({
    name: 'Plan',
    fields: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        prices: { type: new GraphQLList(PriceFeatureType) },
        categories: { type: new GraphQLList(CategoryType) }
    }
});