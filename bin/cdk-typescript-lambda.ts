#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkTypescriptLambdaStack } from '../lib/cdk-typescript-lambda-stack';

const app = new cdk.App();
new CdkTypescriptLambdaStack(app, 'CdkTypescriptLambdaStack');
