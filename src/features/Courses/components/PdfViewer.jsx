import React, { useState } from 'react'
import { Stack, Box } from '@mui/material'
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { useParams } from 'react-router'
import { zoomPlugin } from '@react-pdf-viewer/zoom'
import {
    fullScreenPlugin,
    RenderEnterFullScreenProps,
} from '@react-pdf-viewer/full-screen'
import {
    pageNavigationPlugin,
    DownArrowIcon,
    NextIcon,
    PreviousIcon,
    UpArrowIcon,
} from '@react-pdf-viewer/page-navigation'
import { Button } from '@mui/material'

export default function PdfViewer() {

    console.log('Enteerd')
    const params = useParams()
    const pdfUrl = decodeURIComponent(params.url)
    const zoomPluginInstance = zoomPlugin()
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance
    const fullScreenPluginInstance = fullScreenPlugin()
    const { EnterFullScreen } = fullScreenPluginInstance
    const pageNavigationPluginInstance = pageNavigationPlugin()

    return (
        <Box
            marginLeft={'120px'}
            marginTop={'20px'}
            marginRight={'80px'}
        >
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-evenly'}
            >
                <Button>
                    {(GoToNextPage) => <NextIcon onClick={GoToNextPage.onClick} />}
                    Next page
                </Button>
                <ZoomOutButton />
                <ZoomPopover />
                <ZoomInButton />
                <EnterFullScreen>
                    {(RenderEnterFullScreenProps) => (
                        <button
                            style={{
                                backgroundColor: '#357edd',
                                border: 'none',
                                borderRadius: '4px',
                                color: '#ffffff',
                                cursor: 'pointer',
                                padding: '8px',
                            }}
                            onClick={RenderEnterFullScreenProps.onClick}
                        >
                            Enter fullscreen
                        </button>
                    )}
                </EnterFullScreen>
            </Stack>
            <Box
                height={'800px'}
            >
                <Worker
                    workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                >
                    <Viewer
                        defaultScale={SpecialZoomLevel.PageFit}
                        fileUrl={pdfUrl}
                        plugins={
                            ([zoomPluginInstance],
                                [fullScreenPluginInstance],
                                [pageNavigationPluginInstance])
                        }
                    />
                </Worker>
            </Box>
        </Box>
    )
}
