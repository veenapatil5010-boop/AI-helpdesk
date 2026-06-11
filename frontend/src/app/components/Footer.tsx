import { Building2, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">JSW Steel</h3>
                <p className="text-xs text-gray-400">Help Desk System</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              AI-powered employee support system for seamless issue resolution and ticket management.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Support</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>jswsteel.connect@jsw.in</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>1800-123-4567</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
              <div>Help Documentation</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2026 JSW Steel. All rights reserved. | Powered by AI Help Desk
        </div>
      </div>
    </footer>
  );
}
