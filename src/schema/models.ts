import { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString } from 'graphql';

export const PriceType: any = new GraphQLObjectType({
    name: 'Price',
    fields: () => ({
        id: { type: GraphQLInt },
        price: { type: GraphQLInt },
        market: { type: GraphQLString },
        type: { type: GraphQLString },
        plan: { type: PlanType },
        planId: { type: GraphQLInt },
        priceFeature: { type: PriceFeatureType },
        priceFeatureId: { type: GraphQLInt },
    })
});

export const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        feature: { type: FeatureType },
        featureId: { type: GraphQLInt }
    })
});

export const FeatureType: any = new GraphQLObjectType({
    name: 'Feature',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        priceFeature: { type: PriceFeatureType },
        priceFeatureId: { type: GraphQLInt },
        categories: { type: new GraphQLList(CategoryType) }
    })
});

export const PriceFeatureType = new GraphQLObjectType({
    name: 'PriceFeature',
    fields: () => ({
        id: { type: GraphQLInt },
        displayPriority: { type: GraphQLInt },
        allowance: { type: GraphQLInt },
        price: { type: PriceType },
        features: { type: new GraphQLList(FeatureType) }
    })
});

export const PlanType: any = new GraphQLObjectType({
    name: 'Plan',
    fields: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        prices: { type: new GraphQLList(PriceType) },
    }
});