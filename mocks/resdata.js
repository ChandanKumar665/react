export const menu = {
  data: {
    statusMessage: 'done successfully',
    cards: [
      {
        card: {
          card: {
            '@type':
              'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
            info: {
              id: '428',
              name: 'Biryani Pot',
              city: 'Bangalore',
              slugs: {
                restaurant: 'biryani-pot-madiwala-junction-btm',
                city: 'bangalore'
              },
              uniqueId: '6db20a8b-dd85-4148-b750-107169f7f826',
              cloudinaryImageId: 'mdipoyzfzsa7n7igskht',
              locality: 'Maruti Nagar',
              areaName: 'Btm Layout',
              costForTwo: '50000',
              costForTwoMessage: '₹500 for two',
              cuisines: ['North Indian', 'Biryani'],
              avgRating: 3.9,
              feeDetails: {
                restaurantId: '428',
                fees: [
                  {
                    name: 'time'
                  },
                  {
                    name: 'distance',
                    fee: 7600
                  },
                  {
                    name: 'special'
                  }
                ],
                totalFee: 7600,
                icon: 'SurgeAssets/distSurge',
                message:
                  'Based on distance, an additional delivery fee will apply'
              },
              parentId: '21798',
              avgRatingString: '3.9',
              totalRatingsString: '10K+ ratings',
              sla: {
                restaurantId: '428',
                deliveryTime: 29,
                minDeliveryTime: 29,
                maxDeliveryTime: 29,
                lastMileTravel: 6.8,
                serviceability: 'SERVICEABLE',
                stressFactor: 0.65850425,
                rainMode: 'RAIN_MODE_NONE',
                longDistance: 'LONG_DISTANCE_IT_IS_LONG_DISTANCE',
                zoneId: 4,
                slaString: '29 MINS',
                lastMileTravelString: '6.8 km',
                iconType: 'ICON_TYPE_EMPTY'
              },
              availability: {
                nextCloseTime: '2023-07-08 03:00:00',
                visibility: true,
                opened: true,
                restaurantClosedMeta: {}
              },
              aggregatedDiscountInfo: {
                header: 'FLAT100 off',
                shortDescriptionList: [
                  {
                    meta: 'FLAT100 off | Use FLATDEAL',
                    discountType: 'Flat',
                    operationType: 'RESTAURANT'
                  },
                  {
                    meta: '10% off | Use PARTY',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT'
                  }
                ],
                descriptionList: [
                  {
                    meta: 'FLAT100 off | Use FLATDEAL',
                    discountType: 'Flat',
                    operationType: 'RESTAURANT'
                  },
                  {
                    meta: '10% off | Use code PARTY',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT'
                  }
                ],
                visible: true
              },
              badges: {},
              slugString: 'biryani-pot-madiwala-junction-btm',
              isOpen: true,
              labels: [
                {
                  title: 'Timings',
                  message: 'null'
                },
                {
                  title: 'Address',
                  message:
                    '14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68'
                },
                {
                  title: 'Cuisines',
                  message: 'North Indian,Biryani'
                }
              ],
              totalRatings: 10000,
              aggregatedDiscountInfoV2: {
                header: 'FLAT100 off',
                shortDescriptionList: [
                  {
                    meta: 'FLAT100 off | Use FLATDEAL',
                    discountType: 'Flat',
                    operationType: 'RESTAURANT'
                  },
                  {
                    meta: '10% off | Use PARTY',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT'
                  }
                ],
                descriptionList: [
                  {
                    meta: 'FLAT100 off | Use FLATDEAL',
                    discountType: 'Flat',
                    operationType: 'RESTAURANT'
                  },
                  {
                    meta: '10% off | Use code PARTY',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT'
                  }
                ],
                couponDetailsCta: 'View coupon details'
              },
              type: 'F',
              nudgeBanners: [
                {
                  minValue: 420,
                  maxValue: 600,
                  priority: 2,
                  couponCode: 'PARTY',
                  discountInfo: {
                    discountType: 'Percentage',
                    value: 10
                  },
                  lockedMessage:
                    'Add items worth ₹<amount> to unlock flat 10% off | Code PARTY',
                  unlockedMessage:
                    'PARTY Coupon Unlocked! Use it to save flat 10% off',
                  logoCtx: {}
                }
              ],
              headerBanner: {
                url: 'swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/428'
              },
              expectationNotifiers: [
                {
                  text: 'Based on distance, an additional delivery fee will apply',
                  icon: {
                    imageId: 'SurgeAssets/distSurge'
                  },
                  popup: {
                    cta: {}
                  },
                  type: 'DISTANCE_FEE_FOOD_LM',
                  enrichedText:
                    'Based on distance, an additional delivery fee will apply',
                  halfCardPopup: {
                    halfCardPopupHeader: {}
                  }
                }
              ],
              ratingSlab: 'RATING_SLAB_4',
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              hasBestsellerItems: true,
              hasGuiltfreeItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {}
              },
              areaPostalCode: '560068',
              latLong: '12.921991,77.6165291'
            },
            analytics: {}
          },
          relevance: {
            type: 'RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD',
            sectionId: 'POP_UP_CROUTON_MENU'
          }
        }
      },
      {
        card: {
          card: {
            '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget',
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16
                }
              },
              scrollBar: {}
            },
            id: 'offerCollectionWidget_UX4',
            gridElements: {
              infoWithStyle: {
                '@type':
                  'type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle',
                offers: [
                  {
                    info: {
                      header: 'FLAT ₹100 OFF',
                      offerTag: 'FLAT DEAL',
                      offerTagColor: '#E46D47',
                      offerIds: ['bf7301f0-505d-4cbc-9073-0e6df13835cb'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE FLATDEAL',
                      description: 'ABOVE ₹499',
                      offerType: 'offers',
                      restId: '428',
                      offerLogo: 'offers/generic',
                      descriptionTextColor: '#7302060C'
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD'
                    }
                  },
                  {
                    info: {
                      header: 'FLAT 10% OFF',
                      offerTag: 'FLAT DEAL',
                      offerTagColor: '#E46D47',
                      offerIds: ['fb1e6fed-dcdc-4a69-b1a0-067ee3756aab'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE PARTY',
                      description: 'ABOVE ₹600',
                      offerType: 'offers',
                      restId: '428',
                      offerLogo: 'offers/generic',
                      descriptionTextColor: '#7302060C'
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD'
                    }
                  },
                  {
                    info: {
                      header: '20% OFF UPTO ₹100',
                      offerTagColor: '#E46D47',
                      logoBottom:
                        'rng/md/ads/production/be912a4c543f00172d9f82c033ee7239',
                      offerIds: ['b9231198-6b80-4c24-94cf-46c1c356311e'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE RUPAY100',
                      description: 'ABOVE ₹129',
                      offerType: 'offers',
                      restId: '428',
                      offerLogo:
                        'rng/md/ads/production/be912a4c543f00172d9f82c033ee7239',
                      descriptionTextColor: '#7302060C'
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD'
                    }
                  },
                  {
                    info: {
                      header: '20% OFF UPTO ₹200',
                      offerTagColor: '#E46D47',
                      logoBottom:
                        'rng/md/ads/production/5c4848f8c208408b048c18f6be604f14',
                      offerIds: ['c062dc35-baf2-4f87-abc0-8e0f4f658278'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE INDUSIND20',
                      description: 'ABOVE ₹600',
                      offerType: 'offers',
                      restId: '428',
                      offerLogo:
                        'rng/md/ads/production/5c4848f8c208408b048c18f6be604f14',
                      descriptionTextColor: '#7302060C'
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD'
                    }
                  },
                  {
                    info: {
                      header: '15% OFF UPTO ₹300',
                      offerTagColor: '#E46D47',
                      logoBottom:
                        'rng/md/ads/production/15fb1cfe885005447dc8375e7970600f',
                      offerIds: ['ab6ca12d-e322-409c-8396-4b287bdeaf02'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE CITIFOODIE',
                      description: 'ABOVE ₹1200',
                      offerType: 'offers',
                      restId: '428',
                      offerLogo:
                        'rng/md/ads/production/15fb1cfe885005447dc8375e7970600f',
                      descriptionTextColor: '#7302060C'
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD'
                    }
                  }
                ]
              }
            }
          }
        }
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge',
                      badges: {},
                      vegOnlyDetails: {
                        imageId: 'AutoVegOnly_qkjowj',
                        title: 'Showing only vegetarian options.',
                        description:
                          'Tap on the VEG ONLY button to turn off the setting'
                      },
                      topRatedFilter: {}
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Recommended',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296082',
                              name: 'Onion Pakoda',
                              category: 'Quick Bites',
                              imageId: '9db769ca3ff44bb6372e8a652663eb6e',
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '20 ratings',
                                  ratingCountV2: '20'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357338',
                              name: 'Egg Jumbo Roll',
                              category: 'Quick Bites',
                              imageId: 'hhnbv2wnkwys5lvvajbh',
                              inStock: 1,
                              price: 13800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.2',
                                  ratingCount: '13 ratings',
                                  ratingCountV2: '13'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296257',
                              name: 'Chicken Pakoda',
                              category: 'Quick Bites',
                              imageId: 'b2943f3b464771648c6666eced9e77ba',
                              inStock: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.2',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296061',
                              name: 'Egg Jumbo Roll',
                              category: 'Snack Time Specials',
                              imageId: 'hhnbv2wnkwys5lvvajbh',
                              inStock: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.2',
                                  ratingCount: '13 ratings',
                                  ratingCountV2: '13'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357235',
                              name: 'Chilli Baby Corn',
                              category: 'Starters',
                              imageId: 'fvedudbsiaxsamswhtce',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957556',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.6',
                                  ratingCount: '9 ratings',
                                  ratingCountV2: '9'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296086',
                              name: 'Chilli Paneer',
                              category: 'Starters',
                              imageId: 'gopnnxc9k2evkdfiuefe',
                              inStock: 1,
                              isVeg: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957573',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296095',
                              name: 'Gobi Manchurian',
                              category: 'Starters',
                              description: '| Serve 1 |',
                              imageId: 'd7e65c9e844b51b7380282be3ca80a73',
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957553',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '17 ratings',
                                  ratingCountV2: '17'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296084',
                              name: 'Paneer 65',
                              category: 'Starters',
                              imageId: '9b75b2c7393ca65c5aee88e229f88a14',
                              inStock: 1,
                              isVeg: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957566',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296085',
                              name: 'Paneer Manchurian',
                              category: 'Starters',
                              imageId: 'jxbclynnqtefaeiza83c',
                              inStock: 1,
                              isVeg: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957574',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296092',
                              name: 'Chilli Mushroom',
                              category: 'Starters',
                              imageId: 'rq82nkz7eoh8cbhbntqy',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957514',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296096',
                              name: 'Gobi 65',
                              category: 'Starters',
                              imageId: '370d15fef13ac4fd8ce08ae48ab8b2b5',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957567',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '11 ratings',
                                  ratingCountV2: '11'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296093',
                              name: 'Mushroom 65',
                              category: 'Starters',
                              imageId: 'c8e4c4bdc47c49cfb8a03174ddc814e4',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957527',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296094',
                              name: 'Mushroom Manchurian',
                              category: 'Starters',
                              imageId: '5eef3942ccd51d148c3432d71003a72a',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957517',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296303',
                              name: 'Paneer Tikka',
                              category: 'Starters',
                              imageId: 'jgnnowkgvb3pvvwt30ie',
                              inStock: 1,
                              isVeg: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957520',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296256',
                              name: 'Chicken Manchurian',
                              category: 'Starters',
                              description: '| Serve 1 |',
                              imageId: '836061223836d9293577af16a611c84d',
                              inStock: 1,
                              price: 24800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957560',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296264',
                              name: 'Chicken 555',
                              category: 'Starters',
                              imageId: 'auyc2zqoybzmwrd8phwg',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957509',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '16 ratings',
                                  ratingCountV2: '16'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296258',
                              name: 'Chilli Chicken',
                              category: 'Starters',
                              imageId: 'a063eb2b6f2e547610c5b0ff0d4fe80d',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957508',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '22 ratings',
                                  ratingCountV2: '22'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296262',
                              name: 'Dragon Chicken',
                              category: 'Starters',
                              imageId: '6ecd901f2b29919b6c8e6983970941b3',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957518',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296260',
                              name: 'Ginger Chicken',
                              category: 'Starters',
                              imageId: 'obztpxau9vucb7z0blfk',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957526',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296261',
                              name: 'Pepper Chicken',
                              category: 'Starters',
                              imageId: 'b98gce53uk8gzpydrbeb',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957554',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.4',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296276',
                              name: 'Apollo Fish',
                              category: 'Starters',
                              imageId: 'rzn1c8btkmjuisdwug4v',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957570',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357256',
                              name: 'Chicken Lollipop',
                              category: 'Starters',
                              description: '| Serve 1 |',
                              imageId: 'cyyo1ndnj9btju0nzif3',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957506',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '54 ratings',
                                  ratingCountV2: '54'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357259',
                              name: 'Chicken Kabab',
                              category: 'Starters',
                              description: '| Serve 1 |',
                              imageId: 'a2d6kwu8tk3vjzbhk9pl',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957557',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '26 ratings',
                                  ratingCountV2: '26'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296269',
                              name: 'Chilli Mutton Fry',
                              category: 'Starters',
                              imageId: 'jhoie0hi2mkrlmtlm6ra',
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957505',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296271',
                              name: 'Pepper Mutton',
                              category: 'Starters',
                              imageId: 'xeunsohgcm637uyrnrpb',
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957564',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.0',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653774',
                              name: 'Chicken Ghee Roast',
                              category: 'Starters',
                              imageId: 'fizdexd7j6tkrcy2hbkz',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957511',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653775',
                              name: 'Mutton Ghee Roast',
                              category: 'Starters',
                              imageId: 'pw8qyqznl5pocm4tvkei',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957548',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296437',
                              name: 'Jeera Rice',
                              category: 'Biryani And Rice',
                              imageId: 'e8ah7lmste7xdvbncwr6',
                              inStock: 1,
                              isVeg: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957585',
                                  groupName: 'Raita in Biryani',
                                  choices: [
                                    {
                                      id: '70077640',
                                      name: 'Extra Raita ( 25 ML )',
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957586',
                                  groupName: 'Salan in Biryani',
                                  choices: [
                                    {
                                      id: '70077641',
                                      name: 'Extra Salan ( 50 ML)',
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957587',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077642',
                                      name: 'Gulab Jamun [2 Pieces]',
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296435',
                              name: 'Cashew Rice',
                              category: 'Biryani And Rice',
                              imageId: 'tmqarcnyvqopzghpn53l',
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957562',
                                  groupName: 'Salan in Biryani',
                                  choices: [
                                    {
                                      id: '70077641',
                                      name: 'Extra Salan ( 50 ML)',
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957563',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077642',
                                      name: 'Gulab Jamun [2 Pieces]',
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957558',
                                  groupName: 'Raita in Biryani',
                                  choices: [
                                    {
                                      id: '70077640',
                                      name: 'Extra Raita ( 25 ML )',
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357212',
                              name: 'Mushroom Biryani',
                              category: 'Biryani And Rice',
                              description: '| 500 Ml | Served with Raita |',
                              imageId: 'actpr4mk8kkbc4xxvdlh',
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '8538867',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Executive',
                                        price: 158,
                                        default: 1,
                                        id: '28956851',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Regular',
                                        price: 259,
                                        id: '28438028',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Large',
                                        price: 529,
                                        id: '28438029',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '8538867',
                                        variationId: '28956851'
                                      }
                                    ],
                                    price: 15800
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '8538867',
                                        variationId: '28438028'
                                      }
                                    ],
                                    price: 25900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '8538867',
                                        variationId: '28438029'
                                      }
                                    ],
                                    price: 52900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              defaultPrice: 15800,
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '249 ratings',
                                  ratingCountV2: '249'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296280',
                              name: 'Dal Fry',
                              category: 'Main Course',
                              imageId: 'cf54265df9c8ffcb5ed36576cbb5cb36',
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296281',
                              name: 'Dal Tadka',
                              category: 'Main Course',
                              imageId: '03d8af58e059b5fa3f1b25269f0c2f5c',
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357276',
                              name: 'Aloo Gobi Matar Masala',
                              category: 'Main Course',
                              imageId: 'ltmbspbass3rkexcvroy',
                              inStock: 1,
                              isVeg: 1,
                              price: 16900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296292',
                              name: 'Kadai Paneer',
                              category: 'Main Course',
                              imageId: '4cd03dfd57d1e36efb8d93277b4540fa',
                              inStock: 1,
                              isVeg: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296293',
                              name: 'Palak Paneer',
                              category: 'Main Course',
                              imageId: 'aabstcepfmcgo9sry0nx',
                              inStock: 1,
                              isVeg: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296295',
                              name: 'Paneer Butter Masala',
                              category: 'Main Course',
                              imageId: '3ed1118a6bcb73034cd49b10a3e47955',
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '9 ratings',
                                  ratingCountV2: '9'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296305',
                              name: 'Butter Chicken',
                              category: 'Main Course',
                              imageId: 'doa4z7fpitkczoboljqj',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '17 ratings',
                                  ratingCountV2: '17'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296308',
                              name: 'Chicken Kolhapuri',
                              category: 'Main Course',
                              imageId: 'rbxdgzvdj0imxv0fy9he',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296307',
                              name: 'Chicken Masala',
                              category: 'Main Course',
                              imageId: 'tohkkodkmslusodtfz3r',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296306',
                              name: 'Kadai Chicken',
                              category: 'Main Course',
                              imageId: 'ubbz69bfaypf0os4gxty',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296314',
                              name: 'Andhra Chicken Curry',
                              category: 'Main Course',
                              imageId: 'dpgieowk3ch1e4z8nh5b',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.0',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357287',
                              name: 'Hariyali Chicken',
                              category: 'Main Course',
                              imageId: 'lzcv9k50zlnwmineqsrr',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296316',
                              name: 'Spicy Mutton Curry',
                              category: 'Main Course',
                              description: '| 500 Ml |',
                              imageId: 'spyowmjnlt4zj83hajev',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '13 ratings',
                                  ratingCountV2: '13'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296318',
                              name: 'Andhra Mutton Curry',
                              category: 'Main Course',
                              imageId: 'ngu1qcccay8avlycg1dc',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296319',
                              name: 'Mutton Rogan Josh',
                              category: 'Main Course',
                              imageId: 'pexgq8m8paah7som4aw4',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357294',
                              name: 'Vegetable Fried Rice',
                              category: 'Fried Rice And Noodles',
                              imageId: 'lfnhcjtgruqqpvxc71cg',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296441',
                              name: 'Veg Hakka Noodles',
                              category: 'Fried Rice And Noodles',
                              imageId: 'q38fpzjcp14rps7gt5g0',
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296443',
                              name: 'Egg Fried Rice',
                              category: 'Fried Rice And Noodles',
                              imageId: 'nrbcjkoog7fy4fsbtxfv',
                              inStock: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296444',
                              name: 'Egg Noodles',
                              category: 'Fried Rice And Noodles',
                              imageId: 'bjvuqdacal9nqhy0bqqe',
                              inStock: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296445',
                              name: 'Chicken Fried Rice',
                              category: 'Fried Rice And Noodles',
                              imageId: 'gahw6wpkrn6bknt2rh6z',
                              inStock: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '47 ratings',
                                  ratingCountV2: '47'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296447',
                              name: 'Schezwan Chicken Fried Rice',
                              category: 'Fried Rice And Noodles',
                              imageId: 'dfz0opyghrts5mgagdie',
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296449',
                              name: 'Chicken Noodles',
                              category: 'Fried Rice And Noodles',
                              imageId: 'kzptgux2mhtdxucirsat',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.0',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ],
                      type: 'CATEGORY_TYPE_RECOMMENDED'
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'MOMOS',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357197',
                              name: 'Paneer Fried Momos [6 Pieces]',
                              category: 'MOMOS',
                              inStock: 1,
                              isVeg: 1,
                              price: 11900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357198',
                              name: 'Paneer Steamed Momos [6 Pieces]',
                              category: 'MOMOS',
                              inStock: 1,
                              isVeg: 1,
                              price: 11900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357199',
                              name: 'Veg Fried Momos [6 Pieces]',
                              category: 'MOMOS',
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357200',
                              name: 'Veg Steamed Momos [6 Pieces]',
                              category: 'MOMOS',
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '14 ratings',
                                  ratingCountV2: '14'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357203',
                              name: 'Chicken Fried Momos [6 Pieces]',
                              category: 'MOMOS',
                              inStock: 1,
                              price: 11900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '12 ratings',
                                  ratingCountV2: '12'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357204',
                              name: 'Chicken Steamed Momos [6 Pieces]',
                              category: 'MOMOS',
                              inStock: 1,
                              price: 11900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '14 ratings',
                                  ratingCountV2: '14'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Quick Bites',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357326',
                              name: 'Veg Grilled Sandwich',
                              category: 'Quick Bites',
                              inStock: 1,
                              isVeg: 1,
                              price: 12500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296082',
                              name: 'Onion Pakoda',
                              category: 'Quick Bites',
                              imageId: '9db769ca3ff44bb6372e8a652663eb6e',
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '20 ratings',
                                  ratingCountV2: '20'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357328',
                              name: 'Cheese Corn Sandwich',
                              category: 'Quick Bites',
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357329',
                              name: 'Mixed Veg Jumbo Roll',
                              category: 'Quick Bites',
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357330',
                              name: 'Mutter Paneer Jumbo Roll',
                              category: 'Quick Bites',
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357331',
                              name: 'Paneer Burji Sandwich',
                              category: 'Quick Bites',
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357332',
                              name: 'Paneer Kalimirch Jumbo Roll',
                              category: 'Quick Bites',
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357333',
                              name: 'Veg Burger',
                              category: 'Quick Bites',
                              inStock: 1,
                              isVeg: 1,
                              price: 11900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357334',
                              name: 'Veg Cheese Jumbo Roll',
                              category: 'Quick Bites',
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357337',
                              name: 'Triple Cheese Sandwich',
                              category: 'Quick Bites',
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296087',
                              name: 'Paneer Pakoda',
                              category: 'Quick Bites',
                              inStock: 1,
                              isVeg: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357338',
                              name: 'Egg Jumbo Roll',
                              category: 'Quick Bites',
                              imageId: 'hhnbv2wnkwys5lvvajbh',
                              inStock: 1,
                              price: 13800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.2',
                                  ratingCount: '13 ratings',
                                  ratingCountV2: '13'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357339',
                              name: 'Chicken Jumbo Roll',
                              category: 'Quick Bites',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '17 ratings',
                                  ratingCountV2: '17'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357340',
                              name: 'Chicken Cheese Sandwich',
                              category: 'Quick Bites',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357341',
                              name: 'Garlic Chicken Sandwich',
                              category: 'Quick Bites',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357342',
                              name: 'Grilled Chicken Burger',
                              category: 'Quick Bites',
                              inStock: 1,
                              price: 14500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357343',
                              name: 'Masala Chicken Sandwich',
                              category: 'Quick Bites',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357345',
                              name: 'Special Chicken Burger',
                              category: 'Quick Bites',
                              inStock: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357347',
                              name: 'Grilled Prawn Jumbo Roll',
                              category: 'Quick Bites',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296257',
                              name: 'Chicken Pakoda',
                              category: 'Quick Bites',
                              imageId: 'b2943f3b464771648c6666eced9e77ba',
                              inStock: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.2',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357352',
                              name: 'Prawn Pakoda',
                              category: 'Quick Bites',
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Snack Time Specials',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653745',
                              name: 'Veg Grilled Sandwich',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              isVeg: 1,
                              price: 12500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653747',
                              name: 'Cheese Corn Sandwich',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296057',
                              name: 'Mixed Veg Jumbo Roll',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357202',
                              name: 'Mutter Paneer Jumbo Roll',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              isVeg: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653746',
                              name: 'Paneer Burji Sandwich',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296060',
                              name: 'Paneer Kalimirch Jumbo Roll',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              isVeg: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653749',
                              name: 'Veg Burger',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              isVeg: 1,
                              price: 11900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296058',
                              name: 'Veg Cheese Jumbo Roll',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653748',
                              name: 'Triple Cheese Sandwich',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296061',
                              name: 'Egg Jumbo Roll',
                              category: 'Snack Time Specials',
                              imageId: 'hhnbv2wnkwys5lvvajbh',
                              inStock: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.2',
                                  ratingCount: '13 ratings',
                                  ratingCountV2: '13'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296062',
                              name: 'Chicken Jumbo Roll',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '17 ratings',
                                  ratingCountV2: '17'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653753',
                              name: 'Chicken Cheese Sandwich',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653751',
                              name: 'Garlic Chicken Sandwich',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653758',
                              name: 'Grilled Chicken Burger',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              price: 14500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653752',
                              name: 'Masala Chicken Sandwich',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653755',
                              name: 'Special Chicken Burger',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357205',
                              name: 'Grilled Prawn Jumbo Roll',
                              category: 'Snack Time Specials',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Starters',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296081',
                              name: 'Peanut Masala',
                              category: 'Starters',
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957524',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '5.0',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296237',
                              name: 'French Fry',
                              category: 'Starters',
                              inStock: 1,
                              isVeg: 1,
                              price: 11900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957522',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.5',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357235',
                              name: 'Chilli Baby Corn',
                              category: 'Starters',
                              imageId: 'fvedudbsiaxsamswhtce',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957556',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.6',
                                  ratingCount: '9 ratings',
                                  ratingCountV2: '9'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296086',
                              name: 'Chilli Paneer',
                              category: 'Starters',
                              imageId: 'gopnnxc9k2evkdfiuefe',
                              inStock: 1,
                              isVeg: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957573',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296095',
                              name: 'Gobi Manchurian',
                              category: 'Starters',
                              description: '| Serve 1 |',
                              imageId: 'd7e65c9e844b51b7380282be3ca80a73',
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957553',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '17 ratings',
                                  ratingCountV2: '17'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296084',
                              name: 'Paneer 65',
                              category: 'Starters',
                              imageId: '9b75b2c7393ca65c5aee88e229f88a14',
                              inStock: 1,
                              isVeg: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957566',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296085',
                              name: 'Paneer Manchurian',
                              category: 'Starters',
                              imageId: 'jxbclynnqtefaeiza83c',
                              inStock: 1,
                              isVeg: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957574',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296092',
                              name: 'Chilli Mushroom',
                              category: 'Starters',
                              imageId: 'rq82nkz7eoh8cbhbntqy',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957514',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296091',
                              name: 'Crispy Corn',
                              category: 'Starters',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957507',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.6',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296096',
                              name: 'Gobi 65',
                              category: 'Starters',
                              imageId: '370d15fef13ac4fd8ce08ae48ab8b2b5',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957567',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '11 ratings',
                                  ratingCountV2: '11'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296093',
                              name: 'Mushroom 65',
                              category: 'Starters',
                              imageId: 'c8e4c4bdc47c49cfb8a03174ddc814e4',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957527',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296094',
                              name: 'Mushroom Manchurian',
                              category: 'Starters',
                              imageId: '5eef3942ccd51d148c3432d71003a72a',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957517',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357237',
                              name: 'Crispy Baby Corn',
                              category: 'Starters',
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957561',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653776',
                              name: 'Paneer Pudina Tikka',
                              category: 'Starters',
                              inStock: 1,
                              isVeg: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957515',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296303',
                              name: 'Paneer Tikka',
                              category: 'Starters',
                              imageId: 'jgnnowkgvb3pvvwt30ie',
                              inStock: 1,
                              isVeg: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957520',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296256',
                              name: 'Chicken Manchurian',
                              category: 'Starters',
                              description: '| Serve 1 |',
                              imageId: '836061223836d9293577af16a611c84d',
                              inStock: 1,
                              price: 24800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957560',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '52083730',
                              name: 'Kalmi Chicken',
                              category: 'Starters',
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '6863327',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Half',
                                        price: 160,
                                        default: 1,
                                        id: '23101761',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Full',
                                        price: 280,
                                        id: '23101760',
                                        inStock: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '6863327',
                                        variationId: '23101761'
                                      }
                                    ],
                                    price: 16000
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '6863327',
                                        variationId: '23101760'
                                      }
                                    ],
                                    price: 28000
                                  }
                                ]
                              },
                              addons: [
                                {
                                  groupId: '84957523',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              defaultPrice: 16000,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357239',
                              name: 'Roasted Chicken',
                              category: 'Starters',
                              imageId: 'czciffsarraaszlvu9ac',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957521',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.2',
                                  ratingCount: '26 ratings',
                                  ratingCountV2: '26'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296264',
                              name: 'Chicken 555',
                              category: 'Starters',
                              imageId: 'auyc2zqoybzmwrd8phwg',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957509',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '16 ratings',
                                  ratingCountV2: '16'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357242',
                              name: 'Chicken Six Five',
                              category: 'Starters',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957559',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296258',
                              name: 'Chilli Chicken',
                              category: 'Starters',
                              imageId: 'a063eb2b6f2e547610c5b0ff0d4fe80d',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957508',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '22 ratings',
                                  ratingCountV2: '22'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296262',
                              name: 'Dragon Chicken',
                              category: 'Starters',
                              imageId: '6ecd901f2b29919b6c8e6983970941b3',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957518',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296260',
                              name: 'Ginger Chicken',
                              category: 'Starters',
                              imageId: 'obztpxau9vucb7z0blfk',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957526',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296261',
                              name: 'Pepper Chicken',
                              category: 'Starters',
                              imageId: 'b98gce53uk8gzpydrbeb',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957554',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.4',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296263',
                              name: 'Schezwan Chicken',
                              category: 'Starters',
                              description: '| Serve 1 |',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957525',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '52083731',
                              name: 'Tangdi Chicken',
                              category: 'Starters',
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '6863328',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Half',
                                        price: 180,
                                        default: 1,
                                        id: '23101763',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Full',
                                        price: 300,
                                        id: '23101762',
                                        inStock: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '6863328',
                                        variationId: '23101763'
                                      }
                                    ],
                                    price: 18000
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '6863328',
                                        variationId: '23101762'
                                      }
                                    ],
                                    price: 30000
                                  }
                                ]
                              },
                              addons: [
                                {
                                  groupId: '84957513',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              defaultPrice: 18000,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '9 ratings',
                                  ratingCountV2: '9'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296276',
                              name: 'Apollo Fish',
                              category: 'Starters',
                              imageId: 'rzn1c8btkmjuisdwug4v',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957570',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357256',
                              name: 'Chicken Lollipop',
                              category: 'Starters',
                              description: '| Serve 1 |',
                              imageId: 'cyyo1ndnj9btju0nzif3',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957506',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '54 ratings',
                                  ratingCountV2: '54'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296279',
                              name: 'Schezwan Fish',
                              category: 'Starters',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957543',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357259',
                              name: 'Chicken Kabab',
                              category: 'Starters',
                              description: '| Serve 1 |',
                              imageId: 'a2d6kwu8tk3vjzbhk9pl',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957557',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '26 ratings',
                                  ratingCountV2: '26'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296269',
                              name: 'Chilli Mutton Fry',
                              category: 'Starters',
                              imageId: 'jhoie0hi2mkrlmtlm6ra',
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957505',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357265',
                              name: 'Chilly Mutton',
                              category: 'Starters',
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957541',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296266',
                              name: 'Grilled Chicken Sausage',
                              category: 'Starters',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957516',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357266',
                              name: 'Murgh Malai Kabab',
                              category: 'Starters',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957510',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296424',
                              name: 'Paprika Grilled Chicken',
                              category: 'Starters',
                              description: '| Serve 1 |',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957549',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296271',
                              name: 'Pepper Mutton',
                              category: 'Starters',
                              imageId: 'xeunsohgcm637uyrnrpb',
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957564',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.0',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '119734769',
                              name: 'Murgh Tandoori',
                              category: 'Starters',
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '29638640',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Half',
                                        price: 239,
                                        default: 1,
                                        id: '92698901',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Full',
                                        price: 399,
                                        id: '92698902',
                                        inStock: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '29638640',
                                        variationId: '92698901'
                                      }
                                    ],
                                    price: 23900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '29638640',
                                        variationId: '92698902'
                                      }
                                    ],
                                    price: 39900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              defaultPrice: 23900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.9',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357268',
                              name: 'Bhuna Gosht',
                              category: 'Starters',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957550',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653774',
                              name: 'Chicken Ghee Roast',
                              category: 'Starters',
                              imageId: 'fizdexd7j6tkrcy2hbkz',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957511',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357269',
                              name: 'Fish Kabab',
                              category: 'Starters',
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957539',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.5',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357270',
                              name: 'Prawn 65',
                              category: 'Starters',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957545',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '5.0',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357271',
                              name: 'Prawn Chilli',
                              category: 'Starters',
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957512',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357272',
                              name: 'Prawn Manchurian',
                              category: 'Starters',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957572',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296425',
                              name: 'Barbeque Chicken',
                              category: 'Starters',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957565',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357274',
                              name: 'Prawn Kabab',
                              category: 'Starters',
                              inStock: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957547',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '3653775',
                              name: 'Mutton Ghee Roast',
                              category: 'Starters',
                              imageId: 'pw8qyqznl5pocm4tvkei',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957548',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077643',
                                      name: 'Lassi',
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Biryani And Rice',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78911541',
                              name: 'Gongura Chicken Biryani',
                              category: 'Biryani And Rice',
                              inStock: 1,
                              price: 26000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isGuiltfree: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.6',
                                  ratingCount: '24 ratings',
                                  ratingCountV2: '24'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357209',
                              name: 'Steam Rice',
                              category: 'Biryani And Rice',
                              inStock: 1,
                              isVeg: 1,
                              price: 8900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957588',
                                  groupName: 'Raita in Biryani',
                                  choices: [
                                    {
                                      id: '70077640',
                                      name: 'Extra Raita ( 25 ML )',
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957589',
                                  groupName: 'Salan in Biryani',
                                  choices: [
                                    {
                                      id: '70077641',
                                      name: 'Extra Salan ( 50 ML)',
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957590',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077642',
                                      name: 'Gulab Jamun [2 Pieces]',
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357210',
                              name: 'Biryani Rice',
                              category: 'Biryani And Rice',
                              description: '| 500 Ml | Served with Raita |',
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '8538865',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Executive',
                                        price: 148,
                                        default: 1,
                                        id: '28438020',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Regular',
                                        price: 219,
                                        id: '28438021',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Large',
                                        price: 409,
                                        id: '28438022',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '8538865',
                                        variationId: '28438020'
                                      }
                                    ],
                                    price: 14800
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '8538865',
                                        variationId: '28438021'
                                      }
                                    ],
                                    price: 21900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '8538865',
                                        variationId: '28438022'
                                      }
                                    ],
                                    price: 40900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              defaultPrice: 14800,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.5',
                                  ratingCount: '25 ratings',
                                  ratingCountV2: '25'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '922832',
                              name: 'Curd Rice',
                              category: 'Biryani And Rice',
                              imageId: 'dchfdev5kec3vlddpmwy',
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957530',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077642',
                                      name: 'Gulab Jamun [2 Pieces]',
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957528',
                                  groupName: 'Raita in Biryani',
                                  choices: [
                                    {
                                      id: '70077640',
                                      name: 'Extra Raita ( 25 ML )',
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957529',
                                  groupName: 'Salan in Biryani',
                                  choices: [
                                    {
                                      id: '70077641',
                                      name: 'Extra Salan ( 50 ML)',
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '32 ratings',
                                  ratingCountV2: '32'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '922810',
                              name: 'Veg Biryani',
                              category: 'Biryani And Rice',
                              description: '| 500 Ml | Served with Raita |',
                              imageId: 'tmygtt8zkkqa3ppzxcxg',
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '149833',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Executive [500 Ml]',
                                        price: 158,
                                        default: 1,
                                        id: '28438023',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Regular [1000 Ml]',
                                        price: 239,
                                        id: '28438024',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Large',
                                        price: 469,
                                        id: '414831',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '149833',
                                        variationId: '28438023'
                                      }
                                    ],
                                    price: 15800
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149833',
                                        variationId: '28438024'
                                      }
                                    ],
                                    price: 23900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149833',
                                        variationId: '414831'
                                      }
                                    ],
                                    price: 46900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              defaultPrice: 15800,
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '155 ratings',
                                  ratingCountV2: '155'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357211',
                              name: 'Paneer Biryani',
                              category: 'Biryani And Rice',
                              description: '| 500 Ml | Served with Raita |',
                              imageId: 'bgrlmo2dimscjguibgpc',
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '8538866',
                                    name: 'Size',
                                    variations: [
                                      {
                                        name: 'Regular',
                                        price: 259,
                                        default: 1,
                                        id: '28438026',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Executive [500 Ml]',
                                        price: 158,
                                        id: '28438025',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Large',
                                        price: 499,
                                        id: '28438027',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '8538866',
                                        variationId: '28438026'
                                      }
                                    ],
                                    price: 25900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '8538866',
                                        variationId: '28438025'
                                      }
                                    ],
                                    price: 15800
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '8538866',
                                        variationId: '28438027'
                                      }
                                    ],
                                    price: 49900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              defaultPrice: 25900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '107 ratings',
                                  ratingCountV2: '107'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296436',
                              name: 'Ghee Rice',
                              category: 'Biryani And Rice',
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957595',
                                  groupName: 'Salan in Biryani',
                                  choices: [
                                    {
                                      id: '70077641',
                                      name: 'Extra Salan ( 50 ML)',
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957596',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077642',
                                      name: 'Gulab Jamun [2 Pieces]',
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957594',
                                  groupName: 'Raita in Biryani',
                                  choices: [
                                    {
                                      id: '70077640',
                                      name: 'Extra Raita ( 25 ML )',
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296437',
                              name: 'Jeera Rice',
                              category: 'Biryani And Rice',
                              imageId: 'e8ah7lmste7xdvbncwr6',
                              inStock: 1,
                              isVeg: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957585',
                                  groupName: 'Raita in Biryani',
                                  choices: [
                                    {
                                      id: '70077640',
                                      name: 'Extra Raita ( 25 ML )',
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957586',
                                  groupName: 'Salan in Biryani',
                                  choices: [
                                    {
                                      id: '70077641',
                                      name: 'Extra Salan ( 50 ML)',
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957587',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077642',
                                      name: 'Gulab Jamun [2 Pieces]',
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296435',
                              name: 'Cashew Rice',
                              category: 'Biryani And Rice',
                              imageId: 'tmqarcnyvqopzghpn53l',
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '84957562',
                                  groupName: 'Salan in Biryani',
                                  choices: [
                                    {
                                      id: '70077641',
                                      name: 'Extra Salan ( 50 ML)',
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957563',
                                  groupName: 'Sweets in Sides',
                                  choices: [
                                    {
                                      id: '70077642',
                                      name: 'Gulab Jamun [2 Pieces]',
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                },
                                {
                                  groupId: '84957558',
                                  groupName: 'Raita in Biryani',
                                  choices: [
                                    {
                                      id: '70077640',
                                      name: 'Extra Raita ( 25 ML )',
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1
                                    }
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1
                                }
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357212',
                              name: 'Mushroom Biryani',
                              category: 'Biryani And Rice',
                              description: '| 500 Ml | Served with Raita |',
                              imageId: 'actpr4mk8kkbc4xxvdlh',
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '8538867',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Executive',
                                        price: 158,
                                        default: 1,
                                        id: '28956851',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Regular',
                                        price: 259,
                                        id: '28438028',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Large',
                                        price: 529,
                                        id: '28438029',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '8538867',
                                        variationId: '28956851'
                                      }
                                    ],
                                    price: 15800
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '8538867',
                                        variationId: '28438028'
                                      }
                                    ],
                                    price: 25900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '8538867',
                                        variationId: '28438029'
                                      }
                                    ],
                                    price: 52900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              defaultPrice: 15800,
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '249 ratings',
                                  ratingCountV2: '249'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '922812',
                              name: 'Egg Biryani',
                              category: 'Biryani And Rice',
                              description: '| 500 Ml |',
                              imageId: 'hkih2vrobujncsh5vnhh',
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '149834',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Executive',
                                        price: 158,
                                        default: 1,
                                        id: '28438030',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Regular',
                                        price: 239,
                                        id: '414832',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Large',
                                        price: 509,
                                        id: '414833',
                                        inStock: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '149834',
                                        variationId: '28438030'
                                      }
                                    ],
                                    price: 15800
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149834',
                                        variationId: '414832'
                                      }
                                    ],
                                    price: 23900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149834',
                                        variationId: '414833'
                                      }
                                    ],
                                    price: 50900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              defaultPrice: 15800,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.6',
                                  ratingCount: '90 ratings',
                                  ratingCountV2: '90'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '922816',
                              name: 'Boneless Special Chicken Biryanispecial Chicken Biryani',
                              category: 'Biryani And Rice',
                              description: '| 500 Ml | Served with Raita |',
                              imageId: 'o5x0ovrs7pu30dz9hidl',
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '149836',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Executive',
                                        price: 158,
                                        default: 1,
                                        id: '28438031',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Regular [1000 Ml]',
                                        price: 309,
                                        id: '28438032',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Large',
                                        price: 629,
                                        id: '414837',
                                        inStock: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '149836',
                                        variationId: '28438031'
                                      }
                                    ],
                                    price: 15800
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149836',
                                        variationId: '28438032'
                                      }
                                    ],
                                    price: 30900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149836',
                                        variationId: '414837'
                                      }
                                    ],
                                    price: 62900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              defaultPrice: 15800,
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              isGuiltfree: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '1117 ratings',
                                  ratingCountV2: '1117'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '922814',
                              name: 'Chicken Dum Biryani',
                              category: 'Biryani And Rice',
                              description: '| 500 Ml | Served with Raita |',
                              imageId: 'stcwjsd9zpxnbi8nnq8t',
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '149835',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Executive [500 Ml]',
                                        price: 158,
                                        default: 1,
                                        id: '28438033',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Regular [1000 Ml]',
                                        price: 299,
                                        id: '28438034',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Large',
                                        price: 609,
                                        id: '414835',
                                        inStock: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '149835',
                                        variationId: '28438033'
                                      }
                                    ],
                                    price: 15800
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149835',
                                        variationId: '28438034'
                                      }
                                    ],
                                    price: 29900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149835',
                                        variationId: '414835'
                                      }
                                    ],
                                    price: 60900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              defaultPrice: 15800,
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              isGuiltfree: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '1300 ratings',
                                  ratingCountV2: '1300'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '922818',
                              name: 'Chicken Fry Piece Biryani',
                              category: 'Biryani And Rice',
                              description: '| 500 Ml | Served with Raita |',
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '149837',
                                    name: 'Size',
                                    variations: [
                                      {
                                        name: 'Regular',
                                        price: 279,
                                        default: 1,
                                        id: '414838',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Executive [500 Ml]',
                                        price: 158,
                                        id: '58197891',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Large',
                                        price: 599,
                                        id: '414839',
                                        inStock: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '149837',
                                        variationId: '414838'
                                      }
                                    ],
                                    price: 27900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149837',
                                        variationId: '58197891'
                                      }
                                    ],
                                    price: 15800
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149837',
                                        variationId: '414839'
                                      }
                                    ],
                                    price: 59900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              defaultPrice: 27900,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isGuiltfree: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '19 ratings',
                                  ratingCountV2: '19'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '922828',
                              name: 'Fish Biryani',
                              category: 'Biryani And Rice',
                              description: '| 500 Ml | Served with Raita |',
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '149840',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Executive',
                                        price: 158,
                                        default: 1,
                                        id: '28956852',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Regular',
                                        price: 299,
                                        id: '414844',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Large',
                                        price: 589,
                                        id: '414845',
                                        inStock: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '149840',
                                        variationId: '28956852'
                                      }
                                    ],
                                    price: 15800
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149840',
                                        variationId: '414844'
                                      }
                                    ],
                                    price: 29900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149840',
                                        variationId: '414845'
                                      }
                                    ],
                                    price: 58900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              defaultPrice: 15800,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isGuiltfree: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '55 ratings',
                                  ratingCountV2: '55'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '922822',
                              name: 'Mutton Biryani',
                              category: 'Biryani And Rice',
                              description: '| 500 Ml | Served with Raita |',
                              imageId: 'sccqbaicntqpuhz3qmus',
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '149838',
                                    name: 'Size',
                                    variations: [
                                      {
                                        name: 'Regular',
                                        price: 319,
                                        default: 1,
                                        id: '414840',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Large',
                                        price: 629,
                                        id: '414841',
                                        inStock: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '149838',
                                        variationId: '414840'
                                      }
                                    ],
                                    price: 31900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '149838',
                                        variationId: '414841'
                                      }
                                    ],
                                    price: 62900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              defaultPrice: 31900,
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.6',
                                  ratingCount: '112 ratings',
                                  ratingCountV2: '112'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357214',
                              name: 'Prawn Biryani',
                              category: 'Biryani And Rice',
                              description: '| 500 Ml | Served with Raita |',
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '8538869',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Executive',
                                        price: 158,
                                        default: 1,
                                        id: '28956853',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Regular',
                                        price: 309,
                                        id: '28438037',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Large',
                                        price: 629,
                                        id: '28438038',
                                        inStock: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '8538869',
                                        variationId: '28956853'
                                      }
                                    ],
                                    price: 15800
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '8538869',
                                        variationId: '28438037'
                                      }
                                    ],
                                    price: 30900
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '8538869',
                                        variationId: '28438038'
                                      }
                                    ],
                                    price: 62900
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              defaultPrice: 15800,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isGuiltfree: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '138 ratings',
                                  ratingCountV2: '138'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Combos',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '44557369',
                              name: 'Jeera Rice With Gobi Manchurian',
                              category: 'Combos',
                              inStock: 1,
                              isVeg: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '44557372',
                              name: 'Roti With Dal Fry',
                              category: 'Combos',
                              inStock: 1,
                              isVeg: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357215',
                              name: 'Curd Rice With Gobi Manchurian',
                              category: 'Combos',
                              inStock: 1,
                              isVeg: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '12 ratings',
                                  ratingCountV2: '12'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '44557373',
                              name: 'Roti With Paneer Butter Masala',
                              category: 'Combos',
                              inStock: 1,
                              isVeg: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357218',
                              name: 'Steam Rice + Dal Fry + Dry Papad + Pickle',
                              category: 'Combos',
                              inStock: 1,
                              isVeg: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357219',
                              name: 'Steam Rice + Mix Veg Curry + Dry Papad + Pickle',
                              category: 'Combos',
                              inStock: 1,
                              isVeg: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357221',
                              name: 'Veg Biryani With Coke [250 Ml]',
                              category: 'Combos',
                              inStock: 1,
                              isVeg: 1,
                              price: 24500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.0',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357222',
                              name: 'Mushroom Biryani Regular With Coke [750 Ml]',
                              category: 'Combos',
                              inStock: 1,
                              isVeg: 1,
                              price: 25400,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357223',
                              name: 'Paneer Biryani  Regular With Coke[750 Ml]',
                              category: 'Combos',
                              inStock: 1,
                              isVeg: 1,
                              price: 29400,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '5.0',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357224',
                              name: 'Steam Rice + Egg Curry + Dry Papad + Pickle',
                              category: 'Combos',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357225',
                              name: 'Egg Biryani Regular With Coke[750 Ml]',
                              category: 'Combos',
                              inStock: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '44557368',
                              name: 'Jeera Rice With Chilli Chicken',
                              category: 'Combos',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357226',
                              name: '2 Piece Roti With Butter Chicken',
                              category: 'Combos',
                              description: '| Serve 1 | Served with Bread |',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '14 ratings',
                                  ratingCountV2: '14'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357227',
                              name: '2 Pieces Roti With Chicken Masala',
                              category: 'Combos',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357228',
                              name: 'Curd Rice With Chicken Kebab [2 Pieces]',
                              category: 'Combos',
                              inStock: 1,
                              price: 15800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357229',
                              name: 'Executive Biryani Rice + Chicken Wings',
                              category: 'Combos',
                              inStock: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '9 ratings',
                                  ratingCountV2: '9'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357230',
                              name: 'Biryani Rice + Chicken Kebab',
                              category: 'Combos',
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '9 ratings',
                                  ratingCountV2: '9'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357231',
                              name: 'Executive Biryani Rice + Chicken Lollipop',
                              category: 'Combos',
                              inStock: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '18 ratings',
                                  ratingCountV2: '18'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357233',
                              name: 'Boneless Special Chicken Biryani Regular With Coke[750 Ml]',
                              category: 'Combos',
                              description: '| Serve 1 | Served with Raita |',
                              imageId: 'hwskozgx6no4ftfsqzlk',
                              inStock: 1,
                              price: 32500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357234',
                              name: 'Chicken Fry Piece Biryani Regular With Coke[750 Ml]',
                              category: 'Combos',
                              inStock: 1,
                              price: 30500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Main Course',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296280',
                              name: 'Dal Fry',
                              category: 'Main Course',
                              imageId: 'cf54265df9c8ffcb5ed36576cbb5cb36',
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296281',
                              name: 'Dal Tadka',
                              category: 'Main Course',
                              imageId: '03d8af58e059b5fa3f1b25269f0c2f5c',
                              inStock: 1,
                              isVeg: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357275',
                              name: 'Aloo Gobhi Masala',
                              category: 'Main Course',
                              inStock: 1,
                              isVeg: 1,
                              price: 15900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357276',
                              name: 'Aloo Gobi Matar Masala',
                              category: 'Main Course',
                              imageId: 'ltmbspbass3rkexcvroy',
                              inStock: 1,
                              isVeg: 1,
                              price: 16900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296283',
                              name: 'Green Peas Masala',
                              category: 'Main Course',
                              inStock: 1,
                              isVeg: 1,
                              price: 16900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357277',
                              name: 'Matar Makhani',
                              category: 'Main Course',
                              inStock: 1,
                              isVeg: 1,
                              price: 16900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357278',
                              name: 'Baby Corn Masala',
                              category: 'Main Course',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '922803',
                              name: 'Mixed Veg Curry',
                              category: 'Main Course',
                              imageId: 'kwdp3x0dhelnrb6xirt0',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357280',
                              name: 'Veg Kadai',
                              category: 'Main Course',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357281',
                              name: 'Vegetable Chat Phat',
                              category: 'Main Course',
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296292',
                              name: 'Kadai Paneer',
                              category: 'Main Course',
                              imageId: '4cd03dfd57d1e36efb8d93277b4540fa',
                              inStock: 1,
                              isVeg: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296293',
                              name: 'Palak Paneer',
                              category: 'Main Course',
                              imageId: 'aabstcepfmcgo9sry0nx',
                              inStock: 1,
                              isVeg: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296295',
                              name: 'Paneer Butter Masala',
                              category: 'Main Course',
                              imageId: '3ed1118a6bcb73034cd49b10a3e47955',
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '9 ratings',
                                  ratingCountV2: '9'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357283',
                              name: 'Paneer Chat Phat',
                              category: 'Main Course',
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296294',
                              name: 'Paneer Tikka Makhani',
                              category: 'Main Course',
                              inStock: 1,
                              isVeg: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357284',
                              name: 'Punjabi Paneer',
                              category: 'Main Course',
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296288',
                              name: 'Kaju Paneer',
                              category: 'Main Course',
                              inStock: 1,
                              isVeg: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357285',
                              name: 'Paneer Bhurji',
                              category: 'Main Course',
                              inStock: 1,
                              isVeg: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '922804',
                              name: 'Egg Curry',
                              category: 'Main Course',
                              imageId: 'ixx3h4q6xyggkgllivnt',
                              inStock: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.6',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296305',
                              name: 'Butter Chicken',
                              category: 'Main Course',
                              imageId: 'doa4z7fpitkczoboljqj',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '17 ratings',
                                  ratingCountV2: '17'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296308',
                              name: 'Chicken Kolhapuri',
                              category: 'Main Course',
                              imageId: 'rbxdgzvdj0imxv0fy9he',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296307',
                              name: 'Chicken Masala',
                              category: 'Main Course',
                              imageId: 'tohkkodkmslusodtfz3r',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296306',
                              name: 'Kadai Chicken',
                              category: 'Main Course',
                              imageId: 'ubbz69bfaypf0os4gxty',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296310',
                              name: 'Achari Chicken',
                              category: 'Main Course',
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296314',
                              name: 'Andhra Chicken Curry',
                              category: 'Main Course',
                              imageId: 'dpgieowk3ch1e4z8nh5b',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.0',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357286',
                              name: 'Chicken Do Pyaaza',
                              category: 'Main Course',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296321',
                              name: 'Goan Fish Curry',
                              category: 'Main Course',
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357287',
                              name: 'Hariyali Chicken',
                              category: 'Main Course',
                              imageId: 'lzcv9k50zlnwmineqsrr',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296311',
                              name: 'Punjabi Chicken',
                              category: 'Main Course',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296320',
                              name: 'Andhra Fish Curry',
                              category: 'Main Course',
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357288',
                              name: 'Bengal Fish Curry',
                              category: 'Main Course',
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296317',
                              name: 'Mutton Do Pyaza',
                              category: 'Main Course',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296315',
                              name: 'Mutton Keema Masala',
                              category: 'Main Course',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296316',
                              name: 'Spicy Mutton Curry',
                              category: 'Main Course',
                              description: '| 500 Ml |',
                              imageId: 'spyowmjnlt4zj83hajev',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '13 ratings',
                                  ratingCountV2: '13'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296318',
                              name: 'Andhra Mutton Curry',
                              category: 'Main Course',
                              imageId: 'ngu1qcccay8avlycg1dc',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357289',
                              name: 'Mutton Masala',
                              category: 'Main Course',
                              imageId: 'dwyt9a6n3ii3w8js1qnc',
                              inStock: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.4',
                                  ratingCount: '20 ratings',
                                  ratingCountV2: '20'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296319',
                              name: 'Mutton Rogan Josh',
                              category: 'Main Course',
                              imageId: 'pexgq8m8paah7som4aw4',
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296325',
                              name: 'Kadai Prawn',
                              category: 'Main Course',
                              inStock: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357290',
                              name: 'Prawn Do Pyaza',
                              category: 'Main Course',
                              inStock: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357293',
                              name: 'Prawn Masala',
                              category: 'Main Course',
                              inStock: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Fried Rice And Noodles',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357294',
                              name: 'Vegetable Fried Rice',
                              category: 'Fried Rice And Noodles',
                              imageId: 'lfnhcjtgruqqpvxc71cg',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296441',
                              name: 'Veg Hakka Noodles',
                              category: 'Fried Rice And Noodles',
                              imageId: 'q38fpzjcp14rps7gt5g0',
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357296',
                              name: 'Vegetable Chowmein',
                              category: 'Fried Rice And Noodles',
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357297',
                              name: 'Schezwan Noodles',
                              category: 'Fried Rice And Noodles',
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296443',
                              name: 'Egg Fried Rice',
                              category: 'Fried Rice And Noodles',
                              imageId: 'nrbcjkoog7fy4fsbtxfv',
                              inStock: 1,
                              price: 14800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296444',
                              name: 'Egg Noodles',
                              category: 'Fried Rice And Noodles',
                              imageId: 'bjvuqdacal9nqhy0bqqe',
                              inStock: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296445',
                              name: 'Chicken Fried Rice',
                              category: 'Fried Rice And Noodles',
                              imageId: 'gahw6wpkrn6bknt2rh6z',
                              inStock: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '47 ratings',
                                  ratingCountV2: '47'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296447',
                              name: 'Schezwan Chicken Fried Rice',
                              category: 'Fried Rice And Noodles',
                              imageId: 'dfz0opyghrts5mgagdie',
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357304',
                              name: 'Non Veg Mixed Fried Rice',
                              category: 'Fried Rice And Noodles',
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '9 ratings',
                                  ratingCountV2: '9'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296449',
                              name: 'Chicken Noodles',
                              category: 'Fried Rice And Noodles',
                              imageId: 'kzptgux2mhtdxucirsat',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.0',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296450',
                              name: 'Chicken Chowmein',
                              category: 'Fried Rice And Noodles',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296451',
                              name: 'Chicken Hakka Noodles',
                              category: 'Fried Rice And Noodles',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357311',
                              name: 'Chicken Schezwan Noodles',
                              category: 'Fried Rice And Noodles',
                              inStock: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357313',
                              name: 'Special Prawn Fried Rice',
                              category: 'Fried Rice And Noodles',
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Tandoor (non Veg)',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '52083732',
                              name: 'Tandoori Chicken',
                              category: 'Tandoor (non Veg)',
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: '29638638',
                                    name: 'Quantity',
                                    variations: [
                                      {
                                        name: 'Half',
                                        price: 220,
                                        default: 1,
                                        id: '92698897',
                                        inStock: 1,
                                        isEnabled: 1
                                      },
                                      {
                                        name: 'Full',
                                        price: 330,
                                        id: '92698898',
                                        inStock: 1,
                                        isEnabled: 1
                                      }
                                    ]
                                  }
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: '29638638',
                                        variationId: '92698897'
                                      }
                                    ],
                                    price: 22000
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: '29638638',
                                        variationId: '92698898'
                                      }
                                    ],
                                    price: 33000
                                  }
                                ]
                              },
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              defaultPrice: 22000,
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Pastas',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357314',
                              name: 'Veg Italian Pasta',
                              category: 'Pastas',
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296078',
                              name: 'Veg Red Sauce Pasta',
                              category: 'Pastas',
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296156',
                              name: 'Italian Chicken Pasta',
                              category: 'Pastas',
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296157',
                              name: 'Chicken Red Sauce Pasta',
                              category: 'Pastas',
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Breads',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296453',
                              name: 'Phulka',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 2800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '22 ratings',
                                  ratingCountV2: '22'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357316',
                              name: 'Chapati',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 2500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '18 ratings',
                                  ratingCountV2: '18'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '7205035',
                              name: 'Kulcha',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '26 ratings',
                                  ratingCountV2: '26'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296455',
                              name: 'Roti',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '14 ratings',
                                  ratingCountV2: '14'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '7205036',
                              name: 'Butter Kulcha',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.3',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296454',
                              name: 'Butter Phulka',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 3800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '7205029',
                              name: 'Butter Roti',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296460',
                              name: 'Malabar Parotta',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.9',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '7205038',
                              name: 'Methi Parotta',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '7205030',
                              name: 'Methi Roti',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357320',
                              name: 'Plain Parotta',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357321',
                              name: 'Lachha Parotta',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '7205031',
                              name: 'Naan',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296459',
                              name: 'Tawa Parotta',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '7205032',
                              name: 'Butter Naan',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '17 ratings',
                                  ratingCountV2: '17'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296461',
                              name: 'Butter Parotta',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '7205034',
                              name: 'Garlic Naan',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.9',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '7205033',
                              name: 'Cheese Naan',
                              category: 'Breads',
                              inStock: 1,
                              isVeg: 1,
                              price: 6500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {}
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Egg Preparations',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357323',
                              name: 'Omelette',
                              category: 'Egg Preparations',
                              inStock: 1,
                              price: 4900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '64 ratings',
                                  ratingCountV2: '64'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357324',
                              name: 'Egg Bhurji',
                              category: 'Egg Preparations',
                              description: '| Serve 1 |',
                              inStock: 1,
                              price: 6900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '11 ratings',
                                  ratingCountV2: '11'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357325',
                              name: 'Chilli Egg',
                              category: 'Egg Preparations',
                              inStock: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Desserts And Beverages',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '922851',
                              name: 'Mineral Water',
                              category: 'Desserts And Beverages',
                              description: '| 1 ltr |',
                              inStock: 1,
                              isVeg: 1,
                              price: 3800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357353',
                              name: 'Mineral Water [1 Litre]',
                              category: 'Desserts And Beverages',
                              inStock: 1,
                              isVeg: 1,
                              price: 3800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357355',
                              name: 'Gulab Jamun [2 Pieces]',
                              category: 'Desserts And Beverages',
                              imageId: 'zn0faob6tc4am4ohvfka',
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '122 ratings',
                                  ratingCountV2: '122'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '922847',
                              name: 'Lassi',
                              category: 'Desserts And Beverages',
                              imageId: 'fmkdxbg2vorao3nyfqzp',
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '87 ratings',
                                  ratingCountV2: '87'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357356',
                              name: 'Coke [750 Ml]',
                              category: 'Desserts And Beverages',
                              description: '| 750 Ml |',
                              inStock: 1,
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331'
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '83 ratings',
                                  ratingCountV2: '83'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357358',
                              name: 'Sprite [750 Ml]',
                              category: 'Desserts And Beverages',
                              inStock: 1,
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '26 ratings',
                                  ratingCountV2: '26'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357359',
                              name: 'Thums Up [750 Ml]',
                              category: 'Desserts And Beverages',
                              description: '| 750 Ml |',
                              inStock: 1,
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '47 ratings',
                                  ratingCountV2: '47'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '2296488',
                              name: 'Mango Lassi',
                              category: 'Desserts And Beverages',
                              description: '| 250 Ml |',
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.8',
                                  ratingCount: '19 ratings',
                                  ratingCountV2: '19'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '62357354',
                              name: 'Butter Milk',
                              category: 'Desserts And Beverages',
                              imageId: 'iwnt1jgl3nabwnwdznl5',
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 10:45 pm, tomorrow',
                              itemAttribute: {
                                vegClassifier: 'VEG'
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '31 ratings',
                                  ratingCountV2: '31'
                                }
                              }
                            },
                            analytics: {},
                            hideRestaurantDetails: true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo',
                      type: 'FSSAI',
                      imageId: 'fssai_final_edss9i',
                      text: ['License No. 11222334001522']
                    }
                  }
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress',
                      name: 'Biryani Pot',
                      area: 'Btm Layout',
                      completeAddress:
                        '14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68'
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ],
    firstOffsetRequest: true
  }
}

export const resdata = {
  data: {
    cards: [
      {
        cardType: 'carousel',
        layoutAlignmentType: 'VERTICAL',
        data: {
          type: 'carousel',
          subtype: 'topCarousel',
          data: {
            cards: [
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 635529,
                  creativeId: 'rng/md/carousel/production/pneknawbadtvceqzwiep',
                  type: 'restaurantCollectionV2',
                  link: '49301',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 619141,
                  creativeId: 'rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t',
                  type: 'restaurantCollectionV2',
                  link: '56413',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 619143,
                  creativeId: 'rng/md/carousel/production/lzkjv3sxwwjkzg0vxpvt',
                  type: 'restaurantCollectionV2',
                  link: '56422',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 619142,
                  creativeId: 'rng/md/carousel/production/tgnvusbs3fnzz7xupeno',
                  type: 'restaurantCollectionV2',
                  link: '56417',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 619145,
                  creativeId: 'rng/md/carousel/production/nhubtkw7dukg3ukcmpam',
                  type: 'restaurantCollectionV2',
                  link: '56414',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 607193,
                  creativeId: 'rng/md/carousel/production/s5ug2key6e2sptaxku5v',
                  type: 'restaurantCollectionV2',
                  link: '56410',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 607188,
                  creativeId: 'rng/md/carousel/production/oxe97jexxbnxqtbhg2zo',
                  type: 'restaurantCollectionV2',
                  link: '11740',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 607195,
                  creativeId: 'rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3',
                  type: 'restaurantCollectionV2',
                  link: '56421',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              }
            ]
          }
        },
        parentWidget: false
      },
      {
        cardType: 'carousel',
        layoutAlignmentType: 'VERTICAL',
        data: {
          type: 'carousel',
          subtype: 'openFilter',
          data: {
            cards: [
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 181684,
                  creativeId: 'bkhjfipzydkoqncrxpyi',
                  type: 'restaurantCollectionV2',
                  link: '11718',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  title: 'Offers Near You',
                  subtitle: '0 OPTIONS',
                  restaurants: [],
                  totalCount: 0,
                  dwebOpenFilterTitle: 'Offers Near You',
                  dwebOpenFilterBgColor: '#FF0000',
                  dwebOpenFilterSelectIcon: 'eyperwsfhaoa5vktjtu4',
                  dwebOpenFilterDeselectIcon: 'urw8usdf4mk9aywd59gq'
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 273242,
                  creativeId: 'rng/md/carousel/production/vquntqrzvkb08pe59cec',
                  type: 'restaurantCollectionV2',
                  link: '46147',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  title: 'Top Picks',
                  subtitle: '0 OPTIONS',
                  restaurants: [],
                  totalCount: 0,
                  dwebOpenFilterTitle: 'Top Picks',
                  dwebOpenFilterBgColor: '#FF0000',
                  dwebOpenFilterSelectIcon:
                    'rng/md/carousel/production/vt13uzhjrg5r49kh9oru',
                  dwebOpenFilterDeselectIcon:
                    'rng/md/carousel/production/ser2sttildk9yt7t2s91'
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 181685,
                  creativeId: 'auhzanqqslsq5meh0m9l',
                  type: 'restaurantCollectionV2',
                  link: '11709',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  title: 'Only on Swiggy',
                  subtitle: '0 OPTIONS',
                  restaurants: [],
                  totalCount: 0,
                  dwebOpenFilterTitle: 'Only on Swiggy',
                  dwebOpenFilterBgColor: '#FF0000',
                  dwebOpenFilterSelectIcon: 'tvjhvfzjhbxune2idler',
                  dwebOpenFilterDeselectIcon: 'y4vnumwu4f8olsly1hnw'
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 181680,
                  creativeId: 'a3jqjjod5taken7dh1bs',
                  type: 'restaurantCollectionV2',
                  link: '11721',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  title: 'Veg Only',
                  subtitle: '0 OPTIONS',
                  restaurants: [],
                  totalCount: 0,
                  dwebOpenFilterTitle: 'Vegetarian Options',
                  dwebOpenFilterBgColor: '#FF0000',
                  dwebOpenFilterSelectIcon: 'qtjc8dzfexg72lug37a0',
                  dwebOpenFilterDeselectIcon: 'bm8bziikwyvwqsml1clm'
                }
              }
            ]
          }
        },
        parentWidget: false
      },
      {
        cardType: 'seeAllRestaurants',
        layoutAlignmentType: 'VERTICAL',
        data: {
          type: 'seeAllRestaurants',
          data: {
            title: 'SEE ALL',
            totalOpenRestaurants: 1137,
            cards: [
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '8241',
                  name: 'Paris Panini - Gourmet Sandwiches & Wraps',
                  uuid: 'ac4dad63-af02-42dd-a488-1dd857d62a2f',
                  city: '1',
                  area: 'Indiranagar',
                  totalRatingsString: '10000+ ratings',
                  cloudinaryImageId: 'nusgy0smivlm1c9qthu2',
                  cuisines: [
                    'Continental',
                    'Pastas',
                    'Salads',
                    'Snacks',
                    'Desserts',
                    'Fast Food',
                    'French'
                  ],
                  tags: [],
                  costForTwo: 50000,
                  costForTwoString: '₹500 FOR TWO',
                  deliveryTime: 33,
                  minDeliveryTime: 33,
                  maxDeliveryTime: 33,
                  slaString: '33 MINS',
                  lastMileTravel: 2,
                  slugs: {
                    restaurant: 'le-casse-croute-hal-3rd-stage-indiranagar',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    'No 2984, 12th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
                  locality: 'HAL 2nd Stage',
                  parentId: 21019,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  ribbon: [
                    {
                      type: 'PROMOTED'
                    }
                  ],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'distance',
                        fee: 3300,
                        message: ''
                      },
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 3300,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '3300',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: 'Closes soon'
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID:
                    'cid=7364641~p=31~eid=00000189-317f-92b0-05cb-68ee002c1f5e~srvts=1688752591536',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '2 kms',
                  hasSurge: false,
                  aggregatedDiscountInfoV3: {
                    header: '40% OFF',
                    subHeader: 'UPTO ₹100',
                    discountTag: '',
                    headerTypeV2: 0
                  },
                  sla: {
                    restaurantId: '8241',
                    deliveryTime: 33,
                    minDeliveryTime: 33,
                    maxDeliveryTime: 33,
                    lastMileTravel: 2,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: true,
                  avgRating: '4.5',
                  totalRatings: 10000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '428',
                  name: 'Biryani Pot',
                  uuid: '6db20a8b-dd85-4148-b750-107169f7f826',
                  city: '1',
                  area: 'Btm Layout',
                  totalRatingsString: '10000+ ratings',
                  cloudinaryImageId: 'mdipoyzfzsa7n7igskht',
                  cuisines: ['North Indian', 'Biryani'],
                  tags: [],
                  costForTwo: 50000,
                  costForTwoString: '₹500 FOR TWO',
                  deliveryTime: 29,
                  minDeliveryTime: 29,
                  maxDeliveryTime: 29,
                  slaString: '29 MINS',
                  lastMileTravel: 6.800000190734863,
                  slugs: {
                    restaurant: 'biryani-pot-madiwala-junction-btm',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    '14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68',
                  locality: 'Maruti Nagar',
                  parentId: 21798,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'distance',
                        fee: 7600,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 7600,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '7600',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 1,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '6.8 kms',
                  hasSurge: false,
                  aggregatedDiscountInfoV3: {
                    header: '₹100 OFF',
                    subHeader: 'ABOVE ₹499',
                    discountTag: 'FLAT DEAL',
                    headerTypeV2: 0
                  },
                  sla: {
                    restaurantId: '428',
                    deliveryTime: 29,
                    minDeliveryTime: 29,
                    maxDeliveryTime: 29,
                    lastMileTravel: 6.800000190734863,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'IT_IS_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '3.9',
                  totalRatings: 10000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '271',
                  name: 'Meghana Foods',
                  uuid: '6769453d-609b-4798-a846-f25ee329049b',
                  city: '1',
                  area: 'Indiranagar',
                  totalRatingsString: '10000+ ratings',
                  cloudinaryImageId: 'sotxv0gury7f7vrfvb2r',
                  cuisines: [
                    'Biryani',
                    'Andhra',
                    'South Indian',
                    'North Indian',
                    'Chinese',
                    'Seafood'
                  ],
                  tags: [],
                  costForTwo: 50000,
                  costForTwoString: '₹500 FOR TWO',
                  deliveryTime: 39,
                  minDeliveryTime: 39,
                  maxDeliveryTime: 39,
                  slaString: '39 MINS',
                  lastMileTravel: 2.0999999046325684,
                  slugs: {
                    restaurant: 'meghana-foods-cmh-road-indiranagar',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    '544, First Floor, NearIndiranagar Metro Station, CMH Road, Indiranagar, Bangalore',
                  locality: 'CMH Road',
                  parentId: 635,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'distance',
                        fee: 3300,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 3300,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '3300',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '2 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '271',
                    deliveryTime: 39,
                    minDeliveryTime: 39,
                    maxDeliveryTime: 39,
                    lastMileTravel: 2.0999999046325684,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '4.4',
                  totalRatings: 10000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '684224',
                  name: 'Bodypower Cafe',
                  uuid: 'c242bb3f-b24c-488d-bae7-33c47eb1b95f',
                  city: '1',
                  area: 'Indiranagar',
                  totalRatingsString: '100+ ratings',
                  cloudinaryImageId: 'b8ea636736c03ca4ce34676e01515337',
                  cuisines: [
                    'Indian',
                    'South Indian',
                    'Healthy Food',
                    'Beverages'
                  ],
                  tags: [],
                  costForTwo: 45000,
                  costForTwoString: '₹450 FOR TWO',
                  deliveryTime: 42,
                  minDeliveryTime: 42,
                  maxDeliveryTime: 42,
                  slaString: '42 MINS',
                  lastMileTravel: 2.200000047683716,
                  slugs: {
                    restaurant: 'bodypower-cafe-indiranagar-indiranagar',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    '21, Chinmaya Mission Hospital Rd, near Manyavar, Indira Nagar II Stage, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038, India',
                  locality: 'Hoysala Nagar',
                  parentId: 280671,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  ribbon: [
                    {
                      type: 'PROMOTED'
                    }
                  ],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'distance',
                        fee: 3300,
                        message: ''
                      },
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 3300,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '3300',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID:
                    'cid=7367270~p=4~eid=00000189-317f-92b0-05cb-68e5002c0463~srvts=1688752591536',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '2.2 kms',
                  hasSurge: false,
                  aggregatedDiscountInfoV3: {
                    header: '₹125 OFF',
                    subHeader: 'ABOVE ₹249',
                    discountTag: 'FLAT DEAL',
                    headerTypeV2: 0
                  },
                  sla: {
                    restaurantId: '684224',
                    deliveryTime: 42,
                    minDeliveryTime: 42,
                    maxDeliveryTime: 42,
                    lastMileTravel: 2.200000047683716,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: true,
                  avgRating: '4.2',
                  totalRatings: 100,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '427',
                  name: 'Hotel Empire',
                  uuid: 'ade1100f-32c4-4653-8fae-157081d74aa6',
                  city: '1',
                  area: 'Indiranagar',
                  totalRatingsString: '10000+ ratings',
                  cloudinaryImageId: 'vumnivx75awxz9eo1czq',
                  cuisines: ['North Indian', 'Kebabs', 'Biryani'],
                  tags: [],
                  costForTwo: 45000,
                  costForTwoString: '₹450 FOR TWO',
                  deliveryTime: 33,
                  minDeliveryTime: 33,
                  maxDeliveryTime: 33,
                  slaString: '33 MINS',
                  lastMileTravel: 2.299999952316284,
                  slugs: {
                    restaurant: 'hotel-empire-80-feet-road-indiranagar',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    '80ft Road, HAL 2nd Stage, Next to BSNL, Indiranagar,, Bengaluru, Karnataka 560008',
                  locality: 'Indiranagar',
                  parentId: 475,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'distance',
                        fee: 3300,
                        message: ''
                      },
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 3300,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '3300',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '2.2 kms',
                  hasSurge: false,
                  aggregatedDiscountInfoV3: {
                    header: '10% OFF',
                    subHeader: 'UPTO ₹40',
                    discountTag: '',
                    headerTypeV2: 0
                  },
                  sla: {
                    restaurantId: '427',
                    deliveryTime: 33,
                    minDeliveryTime: 33,
                    maxDeliveryTime: 33,
                    lastMileTravel: 2.299999952316284,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '4.2',
                  totalRatings: 10000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '32603',
                  name: "Leon's - Burgers & Wings (Leon Grill)",
                  uuid: '8ce1ad82-7221-4e26-a63f-c0e50d268c9e',
                  city: '1',
                  area: 'binnamangala',
                  totalRatingsString: '10000+ ratings',
                  cloudinaryImageId: 'mtfco4meitoh97jynjxd',
                  cuisines: [
                    'American',
                    'Snacks',
                    'Turkish',
                    'Portuguese',
                    'Continental'
                  ],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: '₹300 FOR TWO',
                  deliveryTime: 41,
                  minDeliveryTime: 41,
                  maxDeliveryTime: 41,
                  slaString: '41 MINS',
                  lastMileTravel: 3,
                  slugs: {
                    restaurant: 'leon-grill-indiranagar-indiranagar',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    'NO 839/1,BINNAMANGALA,FIRST  STAGE,BANGALORE, K R Puram, B.B.M.P East, Karnataka-560038',
                  locality: 'Indiranagar',
                  parentId: 371281,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  ribbon: [
                    {
                      type: 'PROMOTED'
                    }
                  ],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'distance',
                        fee: 4100,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 4100,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '4100',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID:
                    'cid=7403836~p=7~eid=00000189-317f-92b0-05cb-68e6002c076a~srvts=1688752591536',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '3 kms',
                  hasSurge: false,
                  aggregatedDiscountInfoV3: {
                    header: '50% OFF',
                    subHeader: 'UPTO ₹100',
                    discountTag: '',
                    headerTypeV2: 0
                  },
                  sla: {
                    restaurantId: '32603',
                    deliveryTime: 41,
                    minDeliveryTime: 41,
                    maxDeliveryTime: 41,
                    lastMileTravel: 3,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: true,
                  avgRating: '4.3',
                  totalRatings: 10000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '210945',
                  name: 'Royal Restaurant',
                  uuid: '9b33bca4-65e6-4a26-af3e-f47c4476ed4d',
                  city: '1',
                  area: 'Shivajinagar',
                  totalRatingsString: '5000+ ratings',
                  cloudinaryImageId: 'yicweopn4lzcjlqy4jvq',
                  cuisines: ['Chinese', 'North Indian', 'Tandoor'],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: '₹300 FOR TWO',
                  deliveryTime: 43,
                  minDeliveryTime: 43,
                  maxDeliveryTime: 43,
                  slaString: '43 MINS',
                  lastMileTravel: 5.5,
                  slugs: {
                    restaurant:
                      'royal-restaurant-central-bangalore-central-bangalore',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    'Broadway Road Police Station, HKP Road, Sulthangunta, Shivajinagar, Bengaluru, Bangalore Urban, Karnataka, India',
                  locality: 'Sulthangunta',
                  parentId: 2896,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'distance',
                        fee: 6600,
                        message: ''
                      },
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 6600,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '6600',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '5.5 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '210945',
                    deliveryTime: 43,
                    minDeliveryTime: 43,
                    maxDeliveryTime: 43,
                    lastMileTravel: 5.5,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '3.9',
                  totalRatings: 5000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '337335',
                  name: 'Kannur food kitchen',
                  uuid: 'c70b61bc-0f68-4e24-996b-749fbf295c35',
                  city: '1',
                  area: 'BTM Layout',
                  totalRatingsString: '10000+ ratings',
                  cloudinaryImageId: 'a27weqanhnszqiuzsoik',
                  cuisines: ['Kerala', 'Biryani', 'Beverages'],
                  tags: [],
                  costForTwo: 20000,
                  costForTwoString: '₹200 FOR TWO',
                  deliveryTime: 32,
                  minDeliveryTime: 32,
                  maxDeliveryTime: 32,
                  slaString: '32 MINS',
                  lastMileTravel: 7.900000095367432,
                  slugs: {
                    restaurant: 'kannur-food-kitchen-btm-btm',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    'kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India',
                  locality: '1st  Stage',
                  parentId: 114756,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'distance',
                        fee: 8600,
                        message: ''
                      },
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 8600,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '8600',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 1,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '7.9 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '337335',
                    deliveryTime: 32,
                    minDeliveryTime: 32,
                    maxDeliveryTime: 32,
                    lastMileTravel: 7.900000095367432,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'IT_IS_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '3.7',
                  totalRatings: 10000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '59593',
                  name: 'Al Daaz',
                  uuid: 'c189b92c-d842-4595-9a1f-ff85bd67bc2a',
                  city: '1',
                  area: 'Hsr Layout',
                  totalRatingsString: '10000+ ratings',
                  cloudinaryImageId: 'rxsvhvcdip9dbfdijzk9',
                  cuisines: [
                    'American',
                    'Arabian',
                    'Chinese',
                    'Desserts',
                    'Mughlai',
                    'North Indian'
                  ],
                  tags: [],
                  costForTwo: 40000,
                  costForTwoString: '₹400 FOR TWO',
                  deliveryTime: 39,
                  minDeliveryTime: 39,
                  maxDeliveryTime: 39,
                  slaString: '39 MINS',
                  lastMileTravel: 8.399999618530273,
                  slugs: {
                    restaurant: 'al-daaz-hsr-hsr',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    '#64 & 65, 27th Main Rd, 1st Sector HSR Layout - 560102',
                  locality: 'HSR',
                  parentId: 21640,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'distance',
                        fee: 10100,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 10100,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '10100',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 1,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '8.3 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '59593',
                    deliveryTime: 39,
                    minDeliveryTime: 39,
                    maxDeliveryTime: 39,
                    lastMileTravel: 8.399999618530273,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'IT_IS_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '4.3',
                  totalRatings: 10000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '10823',
                  name: 'California Burrito',
                  uuid: 'fd9dd048-93cf-4ffb-a389-1f628f9d8a35',
                  city: '1',
                  area: 'Indiranagar',
                  totalRatingsString: '10000+ ratings',
                  cloudinaryImageId: 'b3lmeehefsg2lprmv9wr',
                  cuisines: [
                    'Mexican',
                    'American',
                    'Salads',
                    'Continental',
                    'Keto',
                    'Healthy Food'
                  ],
                  tags: [],
                  costForTwo: 25000,
                  costForTwoString: '₹250 FOR TWO',
                  deliveryTime: 25,
                  minDeliveryTime: 25,
                  maxDeliveryTime: 25,
                  slaString: '25 MINS',
                  lastMileTravel: 1,
                  slugs: {
                    restaurant: 'california-burrito-2nd-stage-indiranagar',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address: '23, 3rd Main, 1st B Cross, 2nd Stage, Bangalore',
                  locality: 'Indiranagar',
                  parentId: 1252,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  ribbon: [
                    {
                      type: 'PROMOTED'
                    }
                  ],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'distance',
                        fee: 3300,
                        message: ''
                      },
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 3300,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '3300',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID:
                    'cid=7300300~p=13~eid=00000189-317f-92b0-05cb-68e8002c0d45~srvts=1688752591536',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '1 kms',
                  hasSurge: false,
                  aggregatedDiscountInfoV3: {
                    header: '20% OFF',
                    subHeader: 'UPTO ₹50',
                    discountTag: '',
                    headerTypeV2: 0
                  },
                  sla: {
                    restaurantId: '10823',
                    deliveryTime: 25,
                    minDeliveryTime: 25,
                    maxDeliveryTime: 25,
                    lastMileTravel: 1,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: true,
                  avgRating: '4.4',
                  totalRatings: 10000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '279815',
                  name: 'Maggi Nation',
                  uuid: 'f0914a34-661e-4490-aec6-c25a2b1cfbc8',
                  city: '1',
                  area: 'Indiranagar',
                  totalRatingsString: '100+ ratings',
                  cloudinaryImageId: 'iyvguw3qhcqcnxiychg1',
                  cuisines: ['Indian'],
                  tags: [],
                  costForTwo: 20000,
                  costForTwoString: '₹200 FOR TWO',
                  deliveryTime: 32,
                  minDeliveryTime: 32,
                  maxDeliveryTime: 32,
                  slaString: '32 MINS',
                  lastMileTravel: 1.399999976158142,
                  slugs: {
                    restaurant: 'maggination-indiranagar-indiranagar',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    '#110, Ground Floor, 18th Main, 100 Feet Road, Indiranagar, Bangalore -560008',
                  locality: '100 Feet Road',
                  parentId: 129203,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  ribbon: [
                    {
                      type: 'PROMOTED'
                    }
                  ],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'distance',
                        fee: 3300,
                        message: ''
                      },
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 3300,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '3300',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID:
                    'cid=7410091~p=16~eid=00000189-317f-92b0-05cb-68e9002c1008~srvts=1688752591536',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '1.3 kms',
                  hasSurge: false,
                  aggregatedDiscountInfoV3: {
                    header: '20% OFF',
                    subHeader: 'UPTO ₹50',
                    discountTag: '',
                    headerTypeV2: 0
                  },
                  sla: {
                    restaurantId: '279815',
                    deliveryTime: 32,
                    minDeliveryTime: 32,
                    maxDeliveryTime: 32,
                    lastMileTravel: 1.399999976158142,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: true,
                  avgRating: '4.0',
                  totalRatings: 100,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '94703',
                  name: 'Sri Punjabi Dhaba',
                  uuid: '244943ac-cb6b-439f-9a09-687af66615b1',
                  city: '1',
                  area: 'BTM Layout',
                  totalRatingsString: '10000+ ratings',
                  cloudinaryImageId: 'i53hrycmcn2oehrojag0',
                  cuisines: ['North Indian', 'Biryani', 'Chinese', 'Kebabs'],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: '₹300 FOR TWO',
                  deliveryTime: 35,
                  minDeliveryTime: 35,
                  maxDeliveryTime: 35,
                  slaString: '35 MINS',
                  lastMileTravel: 7.800000190734863,
                  slugs: {
                    restaurant: 'sri-punjabi-dhaba-bangalore-btm',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    'Opposite 11th Cross 20th Main Rd,beside sri balaji wood Old Madiwala, Cashier Layout,  1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029',
                  locality: 'Cashier Layout',
                  parentId: 21426,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'distance',
                        fee: 8600,
                        message: ''
                      },
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 8600,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '8600',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 1,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '7.8 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '94703',
                    deliveryTime: 35,
                    minDeliveryTime: 35,
                    maxDeliveryTime: 35,
                    lastMileTravel: 7.800000190734863,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'IT_IS_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '3.0',
                  totalRatings: 10000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '1371',
                  name: 'Hotel Savitha Family Restaurant',
                  uuid: 'e3e0cb4b-b0d8-41f9-af82-9d0aee059e82',
                  city: '1',
                  area: 'Koramangala',
                  totalRatingsString: '10000+ ratings',
                  cloudinaryImageId: '711abd2480bd9338518a25e3f1643ace',
                  cuisines: [
                    'North Indian',
                    'South Indian',
                    'Biryani',
                    'Chinese',
                    'Indian',
                    'Tandoor',
                    'Beverages'
                  ],
                  tags: [],
                  costForTwo: 15000,
                  costForTwoString: '₹150 FOR TWO',
                  deliveryTime: 30,
                  minDeliveryTime: 30,
                  maxDeliveryTime: 30,
                  slaString: '30 MINS',
                  lastMileTravel: 5,
                  slugs: {
                    restaurant:
                      'hotel-savitha-family-restaurant-4th-block-koramangala',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    '#72/33b, 80ft road, green leaf layout, 4th block, Koramangala',
                  locality: '4th block',
                  parentId: 20934,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  ribbon: [
                    {
                      type: 'PROMOTED'
                    }
                  ],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'distance',
                        fee: 6600,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 6600,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '6600',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID:
                    'cid=7408386~p=19~eid=00000189-317f-92b0-05cb-68ea002c135e~srvts=1688752591536',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '5 kms',
                  hasSurge: false,
                  aggregatedDiscountInfoV3: {
                    header: '40% OFF',
                    subHeader: 'UPTO ₹80',
                    discountTag: '',
                    headerTypeV2: 0
                  },
                  sla: {
                    restaurantId: '1371',
                    deliveryTime: 30,
                    minDeliveryTime: 30,
                    maxDeliveryTime: 30,
                    lastMileTravel: 5,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: true,
                  avgRating: '3.9',
                  totalRatings: 10000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '709170',
                  name: 'Imperio Restaurant',
                  uuid: 'b831b957-c7b1-4fb4-bb7c-b07ce0c72cb1',
                  city: '1',
                  area: 'HSR',
                  totalRatingsString: '500+ ratings',
                  cloudinaryImageId: 'a1629b9c7f59577a55411e94425c6d99',
                  cuisines: [
                    'Chinese',
                    'South Indian',
                    'North Indian',
                    'Continental',
                    'Desserts',
                    'Kerala',
                    'Andhra',
                    'Beverages',
                    'Mughlai',
                    'Seafood',
                    'Hyderabadi',
                    'Healthy Food',
                    'Arabian',
                    'Biryani',
                    'Burgers',
                    'Barbecue',
                    'Oriental'
                  ],
                  tags: [],
                  costForTwo: 50000,
                  costForTwoString: '₹500 FOR TWO',
                  deliveryTime: 42,
                  minDeliveryTime: 42,
                  maxDeliveryTime: 42,
                  slaString: '42 MINS',
                  lastMileTravel: 9.100000381469727,
                  slugs: {
                    restaurant: 'imperio-restaurant-hsr-hsr-2',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    'imperio restaurant , 495, 17th Cross Rd, Parangi Palaya, Sector 2, HSR Layout, Bengaluru, Karnataka',
                  locality: 'Sector 2',
                  parentId: 5610,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'distance',
                        fee: 11600,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 11600,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '11600',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '9.1 kms',
                  hasSurge: false,
                  aggregatedDiscountInfoV3: {
                    header: '₹100 OFF',
                    subHeader: 'ABOVE ₹599',
                    discountTag: 'FLAT DEAL',
                    headerTypeV2: 0
                  },
                  sla: {
                    restaurantId: '709170',
                    deliveryTime: 42,
                    minDeliveryTime: 42,
                    maxDeliveryTime: 42,
                    lastMileTravel: 9.100000381469727,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '3.9',
                  totalRatings: 500,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '69350',
                  name: 'The Pizza Bakery',
                  uuid: '6bd89529-6ab5-42c9-967f-616d80989a17',
                  city: '1',
                  area: 'Indiranagar',
                  totalRatingsString: '10000+ ratings',
                  cloudinaryImageId: 'mjcivhhgcji3fdvp3ney',
                  cuisines: [
                    'Pizzas',
                    'Pastas',
                    'Italian',
                    'Desserts',
                    'Continental'
                  ],
                  tags: [],
                  costForTwo: 70000,
                  costForTwoString: '₹700 FOR TWO',
                  deliveryTime: 45,
                  minDeliveryTime: 45,
                  maxDeliveryTime: 45,
                  slaString: '45 MINS',
                  lastMileTravel: 2,
                  slugs: {
                    restaurant: 'the-pizza-bakery-indiranagar-indiranagar',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    '2985, 1st floor 12th Main, HAL 2nd Stage, Indiranagar Bangalore 560038',
                  locality: 'HAL 2nd Stage',
                  parentId: 11108,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  ribbon: [
                    {
                      type: 'PROMOTED'
                    }
                  ],
                  chain: [],
                  feeDetails: {
                    fees: [
                      {
                        name: 'time',
                        fee: 0,
                        message: ''
                      },
                      {
                        name: 'distance',
                        fee: 3300,
                        message: ''
                      },
                      {
                        name: 'special',
                        fee: 0,
                        message: ''
                      }
                    ],
                    totalFees: 3300,
                    message: '',
                    title: 'Delivery Charge',
                    amount: '3300',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: 'Closes soon'
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID:
                    'cid=7364598~p=22~eid=00000189-317f-92b0-05cb-68eb002c1600~srvts=1688752591536',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '2 kms',
                  hasSurge: false,
                  aggregatedDiscountInfoV3: {
                    header: '40% OFF',
                    subHeader: 'UPTO ₹100',
                    discountTag: '',
                    headerTypeV2: 0
                  },
                  sla: {
                    restaurantId: '69350',
                    deliveryTime: 45,
                    minDeliveryTime: 45,
                    maxDeliveryTime: 45,
                    lastMileTravel: 2,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: true,
                  avgRating: '4.3',
                  totalRatings: 10000,
                  new: false
                },
                subtype: 'basic'
              }
            ],
            totalRestaurants: 1137
          },
          subtype: 'personalized'
        },
        parentWidget: false
      }
    ]
  }
}
