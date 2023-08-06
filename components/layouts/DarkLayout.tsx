
export const DarkLayout = ({ children }: any) => {
    return (
        <div style={{
            backgroundColor: 'rgba(250,250,250,0.3)',
            borderRadius: '5px',
            padding: '10px'
        }}>
            <h3>Dark Layout</h3>
            <div>
                {children}
            </div>
        </div >
    )
}
