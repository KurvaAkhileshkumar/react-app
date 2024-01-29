export default function SkeletonLayout() {
    return (
        <>
            <Stack direction={'row'} sx={dashBoardStack}>

                <MyDiv sx={dashBoardCard}>
                    <AssessmentDetailCard />
                </MyDiv>
                <MyDiv sx={dashBoardCard}>
                    <AssessmentDetailCard />
                </MyDiv>
                <MyDiv sx={dashBoardCard}>
                    <AssessmentDetailCard />
                </MyDiv>
                <MyDiv sx={dashBoardCard}>
                    <AssessmentDetailCard />
                </MyDiv>
                <MyDiv sx={dashBoardCard}>
                    <AssessmentDetailCard />
                </MyDiv>
            </Stack>
        </>
    );
}