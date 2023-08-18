import fetch from 'node-fetch';
import { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLSchema } from 'graphql';
import { PriceFeatureTypeInput, CategoryTypeInput } from './inputs';
import { PlanType, PriceFeatureType } from './models';

const API_URL = 'http://localhost:8081/';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getPlans: {
            type: new GraphQLList(PlanType),
            args: { id: { type: GraphQLInt }, limit: { type: GraphQLInt }, skip: { type: GraphQLInt } },
            resolve(parent, { id, limit, skip }) {
                if (id && (limit || skip)) {
                    throw new Error("Cannot use all parameters");
                }
                let query = '';
                if (limit && skip) {
                    query = `?limit=${limit}&skip=${skip}`
                } else if (id) {
                    query = `?id=${id}`
                }
                return fetch(API_URL + 'plans' + query).then(res => res.json()).then(res => {
                    return res;
                }).catch(err => console.error(err));
            }
        },
        getFeatures: {
            type: new GraphQLList(PriceFeatureType),
            args: { id: { type: GraphQLInt }, limit: { type: GraphQLInt }, skip: { type: GraphQLInt } },
            resolve(parent, { id, limit, skip }) {
                if (id && (limit || skip)) {
                    throw new Error("Cannot use all parameters")
                }
                let query = '';
                if (limit && skip) {
                    query = `?limit=${limit}&skip=${skip}`
                } else if (id) {
                    query = `?id=${id}`
                }
                return fetch(API_URL + 'features' + query).then(res => res.json()).then(res => {
                    return res;
                }).catch(err => console.error(err));
            }
        },
        searchFeatures: {
            type: new GraphQLList(PriceFeatureType),
            args: {
                text: { type: GraphQLString },
                limit: { type: GraphQLInt },
                skip: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return fetch(API_URL + 'features/search', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(args)
                }).then(res => res.json()).then(res => {
                        return res;
                }).catch(err => console.error(err));
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addPlan: {
            type: PlanType,
            args: {
                title: { type: GraphQLString },
                prices: { type: GraphQLList(PriceFeatureTypeInput) },
                categories: { type: GraphQLList(CategoryTypeInput) }
            },
            resolve(parent, args) {
                let plan = {
                    title: args.title,
                    prices: args.prices ?? [],
                    categories: args.categories ?? []
                }
                console.dir(plan, { depth: null })
                return fetch(API_URL + 'plans', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(plan)
                }).then(res => res.json()).then(res => {
                    return res;
                }).catch(err => console.error(err));
            }
        },

    }
});

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});