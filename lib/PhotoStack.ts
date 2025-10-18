import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class PhotoStack extends Stack{
    constructor(scope: Construct, id: string, props?: StackProps){
        super(scope, id, props);

        const myBucket = new Bucket(this, 'PhotoBucket2', {
            bucketName: 'photosbucket-234ks1'
        });

        new CfnOutput(this, 'BucketName', {
            value: myBucket.bucketName
        });

        // reference to change the logical ID value
        (myBucket.node.defaultChild as CfnBucket).overrideLogicalId('PhotosBucket');

    }
}