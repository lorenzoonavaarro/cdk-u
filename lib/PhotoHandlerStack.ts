// Photo handler stack implementation
import { Fn, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda'

interface PhotoHandlerStackProps extends StackProps {
    targetBucketArn: string;
}

export class PhotoHandlerStack extends Stack{

    constructor(scope: Construct, id: string, props: PhotoHandlerStackProps){
        super(scope, id, props);

        new LambdaFunction(this, 'PhotosHandler', {
            runtime: Runtime.NODEJS_18_X,
            handler: 'index.handler',
            code: Code.fromInline(`
            exports.handler = async (event) => {
                console.log("hello!:" + process.env.TARGET_BUCKET)
            };
            `),
        environment: {
            TARGET_BUCKET: props.targetBucketArn
        }
    });
    }
}