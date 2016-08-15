(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["alexaSchemas"] = factory();
	else
		root["alexaSchemas"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _request = __webpack_require__(1);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _response = __webpack_require__(2);
	
	var _response2 = _interopRequireDefault(_response);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var alexaSchemas = {
	  skillsKitRequest: _request2.default,
	  skillsKitResponse: _response2.default
	};
	
	module.exports = alexaSchemas;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"$schema": "http://json-schema.org/schema#",
		"title": "Alexa Skills Kit Request",
		"id": "http://rajington.github.io/alexa-schemas/skills-kit/request.json",
		"description": "The format for the requests sent to your service.\nhttps://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interface-reference#request-format",
		"type": "object",
		"required": [
			"version",
			"session",
			"request"
		],
		"properties": {
			"version": {
				"title": "Version",
				"description": "The version specifier for the request with the value defined as: \"1.0\".",
				"type": "string",
				"enum": [
					"1.0"
				]
			},
			"session": {
				"title": "Session",
				"description": "The session object provides additional context associated with the request.\nFor the definition of the session object.",
				"type": "object",
				"required": [
					"new",
					"sessionId",
					"application",
					"user"
				],
				"properties": {
					"new": {
						"title": "New Session",
						"description": "A boolean value indicating whether this is a new session. Returns true for a new session or false for an existing session.",
						"type": "boolean"
					},
					"sessionId": {
						"title": "Session ID",
						"description": "A string that represents a unique identifier per a user’s active session.",
						"type": "string",
						"pattern": "^amzn1\\.echo-api\\.session\\.[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$"
					},
					"attributes": {
						"title": "Session Attributes",
						"description": "A map of key-value pairs. The attributes map is empty for requests where a new session has started with the attribute new set to true.",
						"type": "object",
						"additionalProperties": true
					},
					"application": {
						"title": "Application",
						"description": "An object containing an application ID. This is used to verify that the request was intended for your service.",
						"type": "object",
						"required": [
							"applicationId"
						],
						"properties": {
							"applicationId": {
								"title": "Application ID",
								"description": "Used to verify that the request was intended for your service.",
								"type": "string",
								"pattern": "^amzn1\\.ask\\.skill\\.[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$"
							}
						}
					},
					"user": {
						"title": "User",
						"description": "An object that describes the user making the request.",
						"type": "object",
						"required": [
							"userId"
						],
						"properties": {
							"userId": {
								"title": "User ID",
								"description": "A string that represents a unique identifier for the user who made the request. The length of this identifier can vary, but is never more than 255 characters. The userId is automatically generated when a user enables the skill in the Alexa app.",
								"type": "string",
								"pattern": "^amzn1\\.ask\\.account\\.[0-9A-Z]{207}$"
							},
							"accessToken": {
								"title": "Access Token",
								"description": "A token identifying the user in another system. This is only provided if the user has successfully linked their account.\nSee Linking an Alexa User with a User in Your System for more details.",
								"type": "string"
							}
						}
					}
				}
			},
			"request": {
				"title": "Request",
				"description": "An object that is composed of associated parameters that further describes the user’s request.\nFor the definition of the available request objects, see: - LaunchRequest - IntentRequest - SessionEndedRequest",
				"type": "object",
				"oneOf": [
					{
						"$ref": "#/definitions/LaunchRequest"
					},
					{
						"$ref": "#/definitions/IntentRequest"
					},
					{
						"$ref": "#/definitions/SessionEndedRequest"
					}
				]
			}
		},
		"definitions": {
			"BaseRequest": {
				"title": "Base Request",
				"description": "Base request object type other request objects inherit from.",
				"type": "object",
				"required": [
					"type",
					"requestId",
					"timestamp"
				],
				"properties": {
					"type": {
						"title": "Request Type",
						"description": "Describes the request type.",
						"type": "string",
						"enum": [
							"LaunchRequest",
							"IntentRequest",
							"SessionEndedRequest"
						]
					},
					"requestId": {
						"title": "Request ID",
						"description": "Represents a unique identifier for the specific request.",
						"type": "string",
						"pattern": "^amzn1\\.echo-api\\.request\\.[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$"
					},
					"timestamp": {
						"title": "Timestamp",
						"description": "Provides the date and time when Alexa sent the request. Use this to verify that the request is current and not part of a \"replay\" attack. Timestamp is provided as an ISO 8601 formatted string (for example, 2015-05-13T12:34:56Z).",
						"type": "string",
						"format": "date-time"
					},
					"locale": {
						"title": "Locale",
						"description": "undocumented but supplied",
						"type": "string",
						"enum": [
							"en-US"
						]
					}
				}
			},
			"LaunchRequest": {
				"allOf": [
					{
						"$ref": "#/definitions/BaseRequest"
					},
					{
						"title": "Launch Request",
						"description": "Represents that a user made a request to an Alexa skill, but did not provide a specific intent.\nhttps://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interface-reference#launchrequest",
						"type": "object",
						"required": [
							"type"
						],
						"properties": {
							"type": {
								"title": "Type",
								"description": "'Describes the type of the request with the value as: \"IntentRequest\".'",
								"type": "string",
								"enum": [
									"LaunchRequest"
								]
							}
						}
					}
				]
			},
			"IntentRequest": {
				"allOf": [
					{
						"$ref": "#/definitions/BaseRequest"
					},
					{
						"title": "Intent Request",
						"description": "Represents a request made to a skill based on what the user wants to do.\nhttps://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interface-reference#intentrequest",
						"type": "object",
						"required": [
							"type",
							"intent"
						],
						"properties": {
							"type": {
								"title": "Type",
								"description": "Describes the type of the request with the value as: \"IntentRequest\".",
								"type": "string",
								"enum": [
									"IntentRequest"
								]
							},
							"intent": {
								"title": "Intent",
								"description": "An object that represents what the user wants.",
								"type": "object",
								"required": [
									"name"
								],
								"properties": {
									"name": {
										"title": "Name",
										"description": "A string representing the name of the intent.",
										"type": "string"
									},
									"slots": {
										"title": "Intent Slots",
										"description": "A map of key-value pairs that further describes what the user meant based on a predefined intent schema. The map can be empty.",
										"type": "object",
										"patternProperties": {
											"^[a-zA-Z0-9]+$": {
												"title": "Key",
												"description": "A string key that describes the name of the slot and a slot object.",
												"type": "object",
												"required": [
													"name"
												],
												"properties": {
													"name": {
														"title": "Slot Name",
														"description": "A string that represents the name of the slot.",
														"type": "string"
													},
													"value": {
														"title": "Slot Value",
														"description": "A string that represents the value of the slot. The value is not required. Note that AMAZON.LITERAL slot values sent to your service are always in all lower case.",
														"type": "string"
													}
												}
											}
										}
									}
								}
							}
						}
					}
				]
			},
			"SessionEndedRequest": {
				"allOf": [
					{
						"$ref": "#/definitions/BaseRequest"
					},
					{
						"title": "Session Ended Request",
						"description": "Represents a request made to a skill based on what the user wants to do.",
						"type": "object",
						"required": [
							"type",
							"reason"
						],
						"properties": {
							"type": {
								"title": "Type",
								"description": "Describes the type of the request with the value as: \"SessionEndedRequest\".",
								"type": "string",
								"enum": [
									"SessionEndedRequest"
								]
							},
							"reason": {
								"title": "Reason",
								"description": "Represents the unique identifier for the specific request.",
								"type": "string",
								"enum": [
									"USER_INITIATED",
									"ERROR",
									"EXCEEDED_MAX_REPROMPTS"
								]
							}
						}
					}
				]
			}
		}
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"$schema": "http://json-schema.org/schema#",
		"title": "Alexa Skills Kit Response",
		"id": "http://rajington.github.io/alexa-schemas/skills-kit/response.json",
		"description": "The format of the response that your service returns. The service for an Alexa skill must send its response in JSON format.\nhttps://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interface-reference#response-format",
		"type": "object",
		"required": [
			"version",
			"response"
		],
		"properties": {
			"version": {
				"title": "Version",
				"description": "The version specifier for the request with the value defined as: \"1.0\".",
				"type": "string",
				"enum": [
					"1.0"
				]
			},
			"sessionAttributes": {
				"title": "Session Attributes",
				"description": "A map of key-value pairs.\nThe key is a string that represents the name of the attribute. Type: string.\nThe value is an object that represents the value of the attribute. Type: object.",
				"type": "object",
				"additionalProperties": true
			},
			"response": {
				"title": "Response",
				"description": "A response object that defines what to render to the user and whether to end the current session.",
				"type": "object",
				"required": [
					"shouldEndSession"
				],
				"properties": {
					"outputSpeech": {
						"$ref": "#/definitions/OutputSpeech"
					},
					"card": {
						"$ref": "#/definitions/Card"
					},
					"reprompt": {
						"title": "Reprompt Speech",
						"description": "The object containing the outputSpeech to use if a re-prompt is necessary.\nThis is used if the your service keeps the session open after sending the response, but the user does not respond with anything that maps to an intent defined in your voice interface while the audio stream is open.\nIf this is not set, the user is not re-prompted.",
						"type": "object",
						"required": [
							"outputSpeech"
						],
						"properties": {
							"outputSpeech": {
								"$ref": "#/definitions/OutputSpeech"
							}
						}
					},
					"shouldEndSession": {
						"title": "Should End Session",
						"description": "A boolean value with true meaning that the session should end, or false if the session should remain active.",
						"type": "boolean"
					}
				}
			}
		},
		"definitions": {
			"OutputSpeech": {
				"title": "Output Speech Object",
				"description": "This object is used for setting both the outputSpeech and the reprompt properties.",
				"type": "object",
				"required": [
					"type"
				],
				"properties": {
					"type": {
						"title": "Type",
						"description": "A string containing the type of output speech to render. Valid types are:\n\"PlainText\": Indicates that the output speech is defined as plain text.\n\"SSML\": Indicates that the output speech is text marked up with SSML.",
						"type": "string",
						"enum": [
							"PlainText",
							"SSML"
						]
					}
				},
				"oneOf": [
					{
						"$ref": "#/definitions/TextOutputSpeech"
					},
					{
						"$ref": "#/definitions/SSMLOutputSpeech"
					}
				]
			},
			"TextOutputSpeech": {
				"title": "Text Output Speech Object",
				"description": "Output speech object for plain text.",
				"type": "object",
				"required": [
					"type",
					"text"
				],
				"properties": {
					"type": {
						"title": "Plain Text Type",
						"description": "Indicates that the output speech is defined as plain text.",
						"type": "string",
						"enum": [
							"PlainText"
						]
					},
					"text": {
						"title": "Plain Text Text",
						"description": "A string containing the speech to render to the user. Use this when type is \"PlainText\"",
						"type": "string",
						"maxLength": 8000
					}
				}
			},
			"SSMLOutputSpeech": {
				"title": "SSML Output Speech Object",
				"description": "Output speech object for SSML.",
				"type": "object",
				"required": [
					"type",
					"ssml"
				],
				"properties": {
					"type": {
						"title": "SSML Text Type",
						"description": "Indicates that the output speech is text marked up with SSML.",
						"type": "string",
						"enum": [
							"SSML"
						]
					},
					"ssml": {
						"title": "SSML Text",
						"description": "A string containing text marked up with SSML to render to the user.",
						"type": "string",
						"maxLength": 8000
					}
				}
			},
			"Card": {
				"title": "Card",
				"description": "The object containing a card to render to the Amazon Alexa App.",
				"type": "object",
				"required": [
					"type"
				],
				"properties": {
					"type": {
						"title": "Card Type",
						"description": "A string describing the type of card to render. Valid types are:\n\"Simple\": A card that contains a title and plain text content.\n\"Standard\": A card that contains a title, text content, and an image to display.\n\"LinkAccount\": a card that displays a link to an authorization URL that the user can use to link their Alexa account with a user in another system. See Linking an Alexa User with a User in Your System for details.",
						"type": "string",
						"enum": [
							"Simple",
							"Standard",
							"LinkAccount"
						]
					}
				},
				"oneOf": [
					{
						"$ref": "#/definitions/SimpleCard"
					},
					{
						"$ref": "#/definitions/StandardCard"
					},
					{
						"$ref": "#/definitions/LinkAccountCard"
					}
				]
			},
			"SimpleCard": {
				"title": "Simple Card",
				"description": "A card that contains a title and plain text content.",
				"type": "object",
				"properties": {
					"type": {
						"title": "Card Type",
						"type": "string",
						"description": "A string describing the type of card to render.",
						"enum": [
							"Simple"
						]
					},
					"title": {
						"title": "Card Title",
						"description": "A string containing the title of the card. (not applicable for cards of type LinkAccount).",
						"type": "string"
					},
					"content": {
						"title": "Card Content",
						"description": "A string containing the contents of a Simple card (not applicable for cards of type Standard or LinkAccount).",
						"type": "string"
					}
				}
			},
			"StandardCard": {
				"title": "Standard Card",
				"description": "A card that contains a title, text content, and an image to display.",
				"type": "object",
				"properties": {
					"type": {
						"title": "Card Type",
						"type": "string",
						"description": "A string describing the type of card to render.",
						"enum": [
							"Standard"
						]
					},
					"title": {
						"title": "Card Title",
						"description": "A string containing the title of the card. (not applicable for cards of type LinkAccount).",
						"type": "string"
					},
					"text": {
						"title": "Card Text",
						"description": "A string containing the text content for a Standard card (not applicable for cards of type Simple or LinkAccount)",
						"type": "string"
					},
					"image": {
						"title": "Card Images",
						"description": "An image object that specifies the URLs for the image to display on a Standard card. Only applicable for Standard cards.\nYou can provide two URLs, for use on different sized screens.",
						"type": "object",
						"properties": {
							"smallImageUrl": {
								"title": "Small Image URL",
								"description": "For use on smaller screens",
								"type": "string",
								"maxLength": 2000
							},
							"largeImageUrl": {
								"title": "Large Image URL",
								"description": "For use on larger screens",
								"type": "string",
								"maxLength": 2000
							}
						}
					}
				}
			},
			"LinkAccountCard": {
				"title": "Link Account Card",
				"description": "A card that displays a link to an authorization URL that the user can use to link their Alexa account with a user in another system. See Linking an Alexa User with a User in Your System for details.",
				"type": "object",
				"properties": {
					"type": {
						"title": "Card Type",
						"type": "string",
						"description": "A string describing the type of card to render.",
						"enum": [
							"LinkAccount"
						]
					}
				}
			}
		}
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=alexa-schemas.js.map