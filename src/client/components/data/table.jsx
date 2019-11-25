import React from 'react'
import MaterialTable from 'material-table'

export default function ({ options, data }) {

    return (
        <MaterialTable
            title={options.title}
            columns={options.columns}
            detailPanel={options.detailPanel}
            data={data}
            options={options.options}
            style={options.style}
            actions={options.actions}
            editable={options.editable}
        />
    )
}