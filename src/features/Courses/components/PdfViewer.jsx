import React, { useState } from 'react'
import { Box } from '@mui/material'
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { useParams } from 'react-router'
import { RenderCurrentScaleProps, RenderZoomInProps, RenderZoomOutProps, zoomPlugin } from '@react-pdf-viewer/zoom';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen'
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation'
import { toolbarPlugin, ToolbarSlot } from '@react-pdf-viewer/toolbar';

export default function PdfViewer() {

    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;
    const params = useParams()
    const pdfUrl = decodeURIComponent(params.url)
    const zoomPluginInstance = zoomPlugin();
    const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;
    const fullScreenPluginInstance = fullScreenPlugin()
    const pageNavigationPluginInstance = pageNavigationPlugin()
    const [scale, setScale] = useState(100)

    const handleZoomOut = () => {
        setScale((scale) => scale - 10)
    }
    const handleZoomIn = () => {
        setScale((scale) => scale + 10)
    }
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            marginLeft={'120px'}
            marginTop={'20px'}
            marginRight={'80px'}
            height={'800px'}
        >

            <Box
                sx={{
                    margin: '0px 380px 0px 380px',
                    backgroundColor: '#FFF',
                }}
            >
                <Toolbar>
                    {(ToolbarSlot) => {
                        const {
                            CurrentPageInput,
                            EnterFullScreen,
                            NumberOfPages,
                            ZoomIn,
                            ZoomOut,
                        } = ToolbarSlot;
                        return (
                            <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
                                <Box display={'flex'} gap={'10px'} sx={{ padding: '0px 2px', fontSize: '15px', width: '70px' }}>
                                    <CurrentPageInput />
                                    <Box marginTop={'6px'} fontSize={'16px'}>
                                        /<NumberOfPages />
                                    </Box>
                                </Box>
                                <Box display={'flex'} gap={'5px'} alignItems={'center'} sx={{ padding: '0px 2px' }}>
                                    <ZoomOut>
                                        {(RenderZoomOutProps) => (
                                            <button
                                                style={{
                                                    border: '0px',
                                                    fontSize: '50px',
                                                    backgroundColor: '#ffffff',
                                                    cursor: 'pointer',
                                                }}
                                                onClick={RenderZoomOutProps.onClick}
                                            >
                                                -
                                            </button>
                                        )}
                                    </ZoomOut>
                                    <Box
                                        padding={'0px'}
                                        margin={'0px'}
                                        fontSize={'20px'}
                                    >
                                        <CurrentScale>
                                            {(RenderCurrentScaleProps) => `${Math.round(RenderCurrentScaleProps.scale * 100)}%`}
                                        </CurrentScale>
                                    </Box>
                                    <ZoomIn>
                                        {(RenderZoomInProps) => (
                                            <button
                                                style={{
                                                    border: '0px',
                                                    fontSize: '35px',
                                                    backgroundColor: '#ffffff',
                                                    cursor: 'pointer',
                                                }}
                                                onClick={RenderZoomInProps.onClick}
                                            >
                                                +
                                            </button>
                                        )}
                                    </ZoomIn>
                                </Box>
                                <Box sx={{ padding: '0px 2px' }}>
                                    <EnterFullScreen />
                                </Box>
                            </Box>
                        );
                    }}
                </Toolbar>
            </Box >
            <Box height={'100%'}>
                <Worker
                    workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                >
                    <Viewer
                        defaultScale={SpecialZoomLevel.PageFit}
                        fileUrl={pdfUrl}
                        plugins={
                            ([zoomPluginInstance],
                                [fullScreenPluginInstance],
                                [pageNavigationPluginInstance],
                                [toolbarPluginInstance])
                        }
                    />
                </Worker>
            </Box>
        </Box >
    )
}
