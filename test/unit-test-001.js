"use strict";

var request = require('supertest'),
	chai = require('chai'),
	express = require('express');

var app = express();
chai.should();

describe('account/:name', function () {

	var server;

	beforeEach(function () {
		delete require.cache[require.resolve('../server')];
		server = require('../server');
		server.start();
	});

	afterEach(function (done) {
		server.stop();
		done();
	});

	it('should return the name passed', function (done) {
		request(server.app)
			.get('/account/john')
			.set('Accept', 'application/json')
			.expect(200, {
				name: 'john'
			})
			.end(function (err, res) {
				if (err) return done(err);
				done();
			});
	});

	it('should return the name passed', function (done) {
		request(server.app)
			.get('/account/john')
			.set('Accept', 'application/json')
			.expect(200)
			.end(function (err, res) {
				if (err) return done(err);
				done();
			});
	});

});