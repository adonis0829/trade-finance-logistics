/**
 * Copyright 2016 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
'use strict';

var utils = require('fabric-client/lib/utils.js');
var logger = utils.getLogger('E2E new-org-join-channel');

var tape = require('tape');
var _test = require('tape-promise');
var test = _test(tape);

var util = require('util');
var path = require('path');
var fs = require('fs');

var Client = require('fabric-client');

var sdkHelper = require('./sdkHelper.js');
var Constants = require('./constants.js');
var ClientUtils = require('./clientUtils.js');
var joinChannel = require('./join-channel.js');

Client.addConfigFile(path.join(__dirname, Constants.networkConfig));
var ORGS = Client.getConfigSetting(Constants.networkId);

joinChannel.joinChannel('exportingentityorg', ORGS).then(() => {
	console.log('\n');
	console.log('----------------------------------');
	console.log('CHANNEL JOIN FOR NEW ORG COMPLETE');
	console.log('----------------------------------');
	console.log('\n');
	joinChannel.joinEventsCleanup();
}, (err) => {
	console.log('\n');
	console.log('----------------------------------');
	console.log('CHANNEL JOIN FOR NEW ORG FAILED:', err);
	console.log('----------------------------------');
	console.log('\n');
	process.exit(1);
});
