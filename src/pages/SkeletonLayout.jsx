export default function SkeletonLayout() {
    return (
        <>
            <Stack direction={'row'} sx={dashBoardStack}>

                <Box sx={dashBoardCard}>
                    <AssessmentDetailCard />
                </Box>
                <Box sx={dashBoardCard}>
                    <AssessmentDetailCard />
                </Box>
                <Box sx={dashBoardCard}>
                    <AssessmentDetailCard />
                </Box>
                <Box sx={dashBoardCard}>
                    <AssessmentDetailCard />
                </Box>
                <Box sx={dashBoardCard}>
                    <AssessmentDetailCard />
                </Box>
            </Stack>
        </>
    );
}