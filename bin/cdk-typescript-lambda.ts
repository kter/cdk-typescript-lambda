#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ShowIpStack } from '../lib/cdk-typescript-lambda-stack';

const app = new cdk.App();
new ShowIpStack(app, 'ShowIpStack');
